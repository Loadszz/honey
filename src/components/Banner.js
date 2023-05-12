import React from 'react'
import Link from 'next/link'

export default function Banner() {
	return (
		<section className="banner">
			<div className="banner__container">
				<div className="banner__body">
					<div className="banner__title">Саме час замовити
						святковий торт </div>
					<div className="banner__text">Наші кондитери залюбки приготують твій найулюбленіший десерт у форматі торту або виконають індивідуальне замовлення.</div>
					<div className="banner__item">
						<Link href={`/menu/${'Торти'}`} className="banner__button button">Замовити</Link>
						<Link href="/menu" className="banner__button banner__button--border button">Дивитись каталог</Link>
					</div>
					<div className="banner__logo _icon-honey-bakery"></div>
				</div>
			</div>
		</section>
	)
}
