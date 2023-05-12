import { useContext, useEffect, useState } from 'react';
import Product from '@/components/Product';
import { useRouter } from 'next/router';
import context from '@/contexts/context';
import MenuWithCatalog from '@/components/MenuWithCatalog';
import MyScriptLoader from '@/components/MyScriptLoader';

export default function () {
	const { query } = useRouter()
	// const [catalogs, setCatalogs] = useState([
	// 	{
	// 		id: 1,
	// 		name: 'Торти',
	// 	},
	// 	{
	// 		id: 2,
	// 		name: 'Десерти',
	// 	},
	// 	{
	// 		id: 3,
	// 		name: 'Еклери',
	// 	},
	// 	{
	// 		id: 4,
	// 		name: 'Макарони',
	// 	},
	// 	{
	// 		id: 5,
	// 		name: 'Випічка',
	// 	},
	// 	{
	// 		id: 6,
	// 		name: 'Цукерки',
	// 	}
	// ])
	// const [catalog, setCatalog] = useState([]);
	const { products, setProducts } = useContext(context.ProductsContext)
	const [filters, setFilters] = useState([
		{
			id: 1,
			name: 'Популярній фільтри',
			filterArr: ['Для чоловіків', 'Для жінок', 'Для дітей', 'На новий рік'],
		},
		{
			id: 2,
			name: 'Смак',
			filterArr: [
				'Nuage',
				'Альфонсо',
				'Київ — Париж',
				'Ейфорія',
				'Exotic',
				'Папа Руж',
				'French Kiss',
				'Ендорфін']
		},
		{
			id: 3,
			name: 'Наявність',
			filterArr: ['Забрати сьогодні', 'На замовленя']
		}
	])
	const [currentItems, setCurrentItems] = useState(products)
	const [filterSort, setFilterSort] = useState(1)

	const { basket, setBasket, addBasket } = useContext(context.BasketContext)
	// useEffect(() => {
	// 	const foundProduct = catalogs.find(p => p.name === query.name);
	// 	setCatalog(foundProduct);
	// }, [query.name])

	const [selectedFilters, setSelectedFilters] = useState([]);
	const [message, setMessage] = useState('')


	function chooseCategory(category) {
		// Создаем новый массив фильтров на основе текущего состояния и выбранной категории
		const newFilters = selectedFilters.includes(category)
			? selectedFilters.filter((filter) => filter !== category)
			: [...selectedFilters, category];

		let filteredItems = newFilters.length === 0
			? products
			: products.filter((item) => {
				return newFilters.some((filter) => item.filterCategory?.includes(filter))
			});
		// Если новый массив фильтров пустой, то возвращаем все товары
		if (newFilters.length === 0) {
			setCurrentItems(products);
			setMessage('')
		} else {
			// Фильтруем товары на основе изначального списка и новых фильтров
			const filteredProducts = products.filter((product) =>
				newFilters.some((filter) => product.filterCategory?.includes(filter))
			);

			// Если после фильтрации нет товаров, то возвращаем все товары
			if (filteredProducts.length === 0) {
				setCurrentItems(products);
				setMessage('Товарів не знайдено!')
			} else {
				setCurrentItems(filteredProducts);
			}
		}

		// Обновляем выбранные фильтры
		setSelectedFilters(newFilters);
		setCurrentItems(filteredItems);
	}

	const handleClick = () => {
		setFilterSort(filterSort === 2 ? 1 : filterSort + 1);
		if (filterSort === 1) {
			const sorted = [...currentItems]
				.sort((a, b) => b.price - a.price)
			setCurrentItems(sorted);
		}
		if (filterSort === 2) {
			const sorted = [...currentItems]
				.sort((a, b) => a.price - b.price)
			setCurrentItems(sorted);
		}
	}
	let [openFilters, setOpenFilters] = useState(false)
	return (
		<>
			<MenuWithCatalog />
			<MyScriptLoader />
			<section id='#query.name' className="catalog-products">
				<div className="catalog-products__container">
					<div className="catalog-products__item min-max">
						<span></span>
						<div className="min-max__block">
							<span onClick={handleClick}></span>
							{filterSort === 1 && <div
								className="min-max__option">
								Від дешевих до дорогих</div>}
							{filterSort === 2 && <div
								className="min-max__option">
								Від дорогих до дешевих</div>}
						</div>
					</div>
					<div className="catalog-products__body">
						<div data-da=".catalog-products__item, 992, 0" className="catalog-products__filter filter-product">
							<div data-da=".catalog-products__container, 992, 0" className="filter-product__title">{query.name}</div>
							<span
								onClick={() => setOpenFilters(openFilters = !openFilters)}>
								Фільтри</span>
							<div className={`filter-product__body ${openFilters ? 'active' : ''}`}>
								{filters.map((filter) => (
									<div className="filter-product__block">
										<div className='filter-product__name'>{filter.name}</div>
										<div key={filter.id} className="filter-product__column">
											{filter.filterArr.map((elem, index) => (
												<div className='filter-product__item'>
													<input
														type='checkbox'
														checked={selectedFilters.includes(elem)}
														onChange={(e) => {
															if (e.target.checked) {
																setSelectedFilters([...selectedFilters, elem]);
															} else {
																setSelectedFilters(selectedFilters.filter((filter) => filter !== elem));
															}
														}}
														className='filter-product__chek'
														key={index}
														onClick={() => chooseCategory(elem)}
													/>
													<div className='filter-product__value'>{elem}</div>
												</div>
											))}
										</div>
									</div>
								))}
								<div>{ }</div>
							</div>
						</div>
						<div className="catalog-products__block">
							<div className="catalog-products__product">
								{currentItems.length === 0 ? <div className="products__message">{message}</div>
									:
									currentItems
										.sort((a, b) => filterSort === 1 ? a.price - b.price : b.price - a.price)
										.filter(product => product.categories.includes(query.name))
										.map(product => (
											<div key={product.id} className={`products__column ${product.backgroundChange}`}>
												<Product product={product} addBasket={addBasket} />
											</div>
										))
								}
							</div>
						</div>
					</div>
				</div>
			</section >
		</>
	)
}
