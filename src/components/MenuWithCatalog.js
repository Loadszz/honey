import { useState, useEffect } from 'react'
import Link from 'next/link'



export default function MenuWithCatalog() {
	const [catalogs, setCatalogs] = useState([
		{
			id: 1,
			image: 'catalog-1.png',
			name: 'Торти',
		},
		{
			id: 2,
			image: 'catalog-2.png',
			name: 'Десерти',
		},
		{
			id: 3,
			image: 'catalog-3.png',
			name: 'Еклери',
		},
		{
			id: 4,
			image: 'catalog-4.png',
			name: 'Макарони',
		},
		{
			id: 5,
			image: 'catalog-5.png',
			name: 'Випічка',
		},
		{
			id: 6,
			image: 'catalog-6.png',
			name: 'Цукерки',
		},
		{
			id: 7,
			image: 'catalog-7.png',
			name: 'Морозиво',
		},
		{
			id: 8,
			image: 'catalog-7.png',
			name: 'Шоколадні пасти',
		}
	])

	return (
		<section className="catalog-mini">
			<div className="catalog-mini__container">
				<div className="catalog-mini__body">
					{catalogs.map((elem) => (
						<div key={elem.id} className='catalog-mini__column'>
							<div className='catalog-mini__image'>
								<img src={`/images/${elem.image}`} alt="" />
							</div>
							<div className="catalog-mini__item">
								<Link href='/menu/[elem.name]' as={`/menu/${elem.name}`} className="catalog-mini__link">{elem.name}</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section >
	)
}
