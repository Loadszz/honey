import React from 'react'
import Link from 'next/link'

export default function History() {
	return (
		<section className="history">
			<div className="history__container">
				<div className="history__subtitle subtitle">Створення солодощів від Honey</div>
				<div className="history__title title">Смачні історії</div>
				<div className="history__body body-block">
					<div className="body-block__column">
						<div className="body-block__image">
							<img src="./images/block-4.png" alt="" />
						</div>
						<div className="body-block__title">Фісташкова Ейфорія</div>
						<div className="body-block__text">На початку розробки було понад 30 варіацій — від банальних із полуницею, до марних із мандарином . За цей час 5 разів ремонтували меланжер, а Стас Завертайло навчився на вигляд та смак відрізняти Іранську, Турецьку та Італійську фісташки. </div>
						<div className="body-block__item">
							<Link href={`/details/${6}`} className="body-block__name">Замовити</Link>
							<Link href={`/details/${6}`} className="body-block__icon _icon-arrow"></Link>
						</div>
					</div>
					<div className="body-block__column">
						<div className="body-block__image">
							<img src="./images/block-5.png" alt="" />
						</div>
						<div className="body-block__title">Альфонсо</div>
						<div className="body-block__text">Робота над авторською рецептурою Альфонсо тривала майже рік.
							Основною та найскладнішою задачею було поєднати кокос і манго в один дует, залишивши при цьому їх сольними артистами.</div>
						<div className="body-block__item">
							<Link href={`/details/${2}`} className="body-block__name">Замовити</Link>
							<Link href={`/details/${2}`} className="body-block__icon _icon-arrow"></Link>
						</div>
					</div>
					<div className="body-block__column">
						<div className="body-block__image">
							<img src="./images/block-6.png" alt="" />
						</div>
						<div className="body-block__title">Plum</div>
						<div className="body-block__text">За мотивами світових кондитерських трендів команда виплекала новий дизайн десерту. Складна техніка та повністю ручна робота — від кісточки до хвостика, від форми до фактури.
						</div>
						<div className="body-block__item">
							<Link href={`/details/${4}`} className="body-block__name">Замовити</Link>
							<Link href={`/details/${4}`} className="body-block__icon _icon-arrow"></Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
