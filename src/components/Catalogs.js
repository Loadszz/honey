import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

export default function Catalogs() {
	const [catalogs, setCatalogs] = useState([
		{
			id: 1,
			image: 'catalogs-1.png',
			name: 'Торти',
			backgroundChange: 'catalogs__image--color'
		},
		{
			id: 2,
			image: 'catalogs-2.png',
			name: 'Десерти',
			backgroundChange: 'catalogs__image--border'
		},
		{
			id: 3,
			image: 'catalogs-5.png',
			name: 'Еклери',
			backgroundChange: 'catalogs__image--color'
		},
		{
			id: 4,
			image: 'catalogs-6.png',
			name: 'Макарони',
			backgroundChange: 'catalogs__image--border'
		},
		{
			id: 5,
			image: 'catalogs-4.png',
			name: 'Випічка',
			backgroundChange: 'catalogs__image--color'
		},
		{
			id: 6,
			image: 'catalogs-7.png',
			name: 'Цукерки',
			backgroundChange: 'catalogs__image--border'
		},
		{
			id: 7,
			image: 'catalogs-3.png',
			name: 'Морозиво',
			backgroundChange: 'catalogs__image--color'
		},
		{
			id: 8,
			image: 'catalogs-7.png',
			name: 'Шоколадні пасти',
			backgroundChange: 'catalogs__image--border'
		}
	])

	return (
		<section className="catalogs">
			<div className="catalogs__container">
				<div className="catalogs__subtitle subtitle">Кондитерська пам'ятка Києва</div>
				<div className="catalogs__title title">Наша продукція</div>
				<div className="catalogs__body">
					{catalogs.map((elem) => (
						<div key={elem.id} className='catalogs__column'>
							<div className={`catalogs__image ${elem.backgroundChange}`}>
								<img src={`/images/${elem.image}`} alt="" />
							</div>
							<div className="catalogs__item">
								<div className="catalogs__text">{elem.name}</div>
								<Link href={`/menu/${elem.name}`} className="catalogs__icon _icon-arrow"></Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section >
	)
}
