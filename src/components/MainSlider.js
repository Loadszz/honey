import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperNavButton from './swiper/SwiperNavButton';


export default function MainSlider({ sliderProducts, addBasket }) {
	return (
		<section className="main-slider">
			<div className="main-slider__container">
				<div className="main-slider__body">
					<Swiper
						modules={[Navigation, Pagination, Scrollbar, A11y]}
						spaceBetween={50}
						slidesPerView={1}
						// navigation
						// pagination={{ clickable: true }}
						// scrollbar={{ draggable: true }}
						onSlideChange={() => console.log('slide change')}
						onSwiper={(swiper) => console.log(swiper)}
					>
						{sliderProducts.map((elem) => (
							<SwiperSlide key={elem.id} className='main-slider__item item-slider'>
								<div className="item-slider__body">
									<div className="item-slider__pre-order">Предзамовлення</div>
									<div className="item-slider__title">{elem.title}</div>
									<div className="item-slider__text">{elem.text}</div>
									<div className="item-slider__inner">
										<a
											href=''
											className="item-slider__button button"
											onClick={(event) => (addBasket(elem), event.preventDefault())}>
											Замовити</a>
										<div className="item-slider__price">{elem.price} ₴</div>
									</div>
									<div className="item-slider__picture _icon-winter-drop"></div>
								</div>
								<div className="item-slider__image">
									<img src={`./images/${elem.image}`} alt="" />
								</div>
							</SwiperSlide>
						))}
						<SwiperNavButton />
					</Swiper>
				</div>
			</div>
		</section>
	)
}
