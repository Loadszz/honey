import React from 'react'

export default function Team() {
	return (
		<section id="team" className="team">
			<div className="team__container">
				<div className="team__body">
					<div className="team__subtitle subtitle">Справжня реміснича пекарня</div>
					<div className="team__title title">Хто ми?</div>
					<div className="team__text">Honey - це ретельно відпрацьоване,
						до рівня верхнього перфекціонізму,
						кондитерське мистецтво</div>
					<div className="team__inner inner-block">
						<div className="inner-block__row">
							<div className="inner-block__image">
								<img src="./images/block-2.jpg" alt="" />
								<div className="inner-block__cirle _icon-circle-2"></div>
							</div>
							<div className="inner-block__text">Кафе-кондитерська Honey відноситься до тієї категорії сімейних проектів з душею в основі, яких не вистачає нашому місту – коли тебе не тільки якісно нагодують та обслужать, а й любитимуть, пам'ятатимуть та завжди чекатимуть у гості. У таких (поки нечисленних) закладах вже з першої хвилини візиту приємно відчутно тонка, але важлива грань – як клієнт стає гостем.</div>
						</div>
						<div className="inner-block__row inner-block__row--reverse">
							<div className="inner-block__image inner-block__image--reverse">
								<img src="./images/block-3.jpg" alt="" />
								<div className="inner-block__cirle inner-block__cirle--reverse _icon-circle-3"></div>
							</div>
							<div className="inner-block__text">Інтер'єр тут доповнений солодким ім'ям і навпаки. І якщо спочатку, тільки переступивши поріг, шукаєш навколо якісь медові асоціації, то, розташувавшись затишно за столиком, розумієш honey у тому мило-солодкому та дбайливому значенні.</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
