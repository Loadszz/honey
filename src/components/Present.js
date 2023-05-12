import React from 'react'
import Link from 'next/link'

export default function Present() {
	return (
		<section className="present">
			<div className="present__container">
				<div className="present__body">
					<div className="present__title">Новорічні подарунки
						від Honey</div>
					<Link href='/menu' className="present__button button">Дивитись каталог</Link>
				</div>
			</div>
		</section>
	)
}
