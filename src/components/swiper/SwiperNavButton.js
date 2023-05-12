import React, { useState } from 'react'
import { useSwiper } from 'swiper/react';

export default function SwiperNavButton() {

	const swiper = useSwiper();
	let [disabledArrowLeft, setDisabledArrowLeft] = useState('disabled')
	let [disabledArrowRigth, setDisabledArrowRight] = useState('')

	function addDisabled(swiper) {
		if (swiper.activeIndex != 0 || swiper.isEnd == true) {
			setDisabledArrowLeft('')
			setDisabledArrowRight('disabled')
		}
		if (swiper.activeIndex == 0) {
			setDisabledArrowLeft('disabled')
		}
		if (swiper.isEnd == false) {
			setDisabledArrowRight('')
		}
	}

	return (
		<div className="main-slider__buttons">
			<button
				className={`main-slider__arrow-l _icon-slider-arrow ${disabledArrowLeft}`}
				onClick={() => { swiper.slidePrev(); addDisabled(swiper); }}></button>
			<button
				className={`main-slider__arrow-r _icon-slider-arrow ${disabledArrowRigth}`}
				onClick={() => { swiper.slideNext(); addDisabled(swiper); }}></button>
		</div>
	)
}
