import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import DetailsProduct from '@/components/DetailsProduct';
import Interesting from '@/components/Interesting';
import context from '@/contexts/context';

export default function () {
	const { query } = useRouter();

	const [product, setProduct] = useState([]);
	const { products, setProducts } = useContext(context.ProductsContext)
	const { basket, setBasket } = useContext(context.BasketContext)
	useEffect(() => {
		if (query?.id) {
			const foundProduct = products.find(p => p.id === parseInt(query.id));
			setProduct(foundProduct);
		}
	}, [query.id])



	function addBasket(item) {
		const isInArray = basket.some(elem => elem.id === item.id);
		if (!isInArray) {
			setBasket([...basket, item]);
		}
	}

	return (
		<>
			{products ? (
				<>
					<DetailsProduct product={product} addBasket={addBasket} />
				</>
			) : (
				<p>Продукт не найден</p>
			)}
			<Interesting products={products} addBasket={addBasket} />
		</>
	)
}
