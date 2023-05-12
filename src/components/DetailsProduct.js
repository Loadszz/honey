import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Pagination } from 'swiper';
import '../../node_modules/swiper/modules/thumbs/thumbs.scss';
import '../../node_modules/swiper/swiper.scss';

export default function DetailsProduct({ product, addBasket }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	let [isSpoilerOpen, isSpoilerSetOpen] = useState({ spoiler1: false, spoiler2: false });

	const toogle1 = () => {
		isSpoilerSetOpen({ ...isSpoilerOpen, spoiler1: !isSpoilerOpen.spoiler1 })
	}
	const toogle2 = () => {
		isSpoilerSetOpen({ ...isSpoilerOpen, spoiler2: !isSpoilerOpen.spoiler2 })
	}

	return (
		<section className="details-product">
			<div className="details-product__container">
				<div className="details-product__subtitle subtitle">{product.name}</div>
				<div className="details-product__title title">{product.title}</div>
				<div className="details-product__body">
					<div className="details-product__column column-image">
						<Swiper
							grabCursor={true}
							loop={true}
							slidesPerView={1}
							spaceBetween={10}
							pagination={true}
							modules={[Thumbs, Pagination]}
							thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}>
							<SwiperSlide>
								<div className="column-image__top">
									<img src={`/images/${product.image}`} alt="" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="column-image__top">
									<img src={`/images/${product.image1}`} alt="" />
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="column-image__top">
									<img src={`/images/${product.image2}`} alt="" />
								</div>
							</SwiperSlide>
						</Swiper>
						<Swiper
							spaceBetween={10}
							slidesPerView={3}
							modules={[Thumbs]}
							watchSlidesProgress
							onSwiper={setThumbsSwiper}>
							<div className="column-image__bot">
								<SwiperSlide>
									<div className="column-image__image">
										<img src={`/images/${product.image}`} alt="" />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="column-image__image">
										<img src={`/images/${product.image1}`} alt="" />
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="column-image__image">
										<img src={`/images/${product.image2}`} alt="" />
									</div>
								</SwiperSlide>
							</div>
						</Swiper>
					</div>
					<div className="details-product__column column-info">
						<div className="column-info__name">{product.name}</div>
						<div className="column-info__title">{product.title}</div>
						<div className="column-info__flavor flavor-block">
							<div className="flavor-block__title">Смак</div>
							<div className="flavor-block__body">
								{product.flavor && product.flavor.map((item, index) => (
									<div key={index} className="flavor-block__item">
										<img src={`/images/${item.image}`} alt="" />
										<div className='flavor-block__name'>{item.item}</div>
									</div>
								))}
							</div>
						</div>
						<div className="column-info__text">{product.text}</div>
						<div className="column-info__weight weight-block">
							<div className="weight-block__title">Вага</div>
							<div className="weight-block__body">
								{product.weight && product.weight.map((elem, index) =>
									<div key={index} className="weight-block__item">{elem}</div>
								)}
							</div>
						</div>
						<div className="column-info__item">
							<div className="column-info__button button"
								onClick={() => addBasket(product)}>{product.button}</div>
							<div className="column-info__price">{product.price} грн</div>
						</div>
						<div className="column-info__footer footer-block">
							<div className="footer-block__body">
								<div className="footer-block__title">Харчова та енергетична цінність
									<span onClick={toogle1}>{isSpoilerOpen.spoiler1 ? '-' : '+'}</span></div>
								<div className={`footer-block__item ${isSpoilerOpen.spoiler1 ? 'active' : ''}`}>
									{product.energyValue && product.energyValue.map((elem, index) =>
										<div key={index} className="footer-block__text">{elem}</div>
									)}
								</div>
							</div>
							<div className="footer-block__body ">
								<div className="footer-block__title">Умови оплати і доставки
									<span onClick={toogle2}>{isSpoilerOpen.spoiler2 ? '-' : '+'}</span></div>
								<div className={`footer-block__item ${isSpoilerOpen.spoiler2 ? 'active' : ''}`}>
									<div className="footer-block__inner inner-pay">
										<div className="inner-pay__title">Способи оплати</div>
										<div className="inner-pay__body">
											<div className="inner-pay__item">
												<div className="inner-pay__subtitle">Готівкою</div>
												<div className="inner-pay__text">За умови самовивозу</div>
											</div>
											<div className="inner-pay">
												<div className="inner-pay__subtitle">Карткою</div>
											</div>
										</div>
									</div>
									<div className="footer-block__inner inner-delivery">
										<div className="inner-delivery__title">Способи та умови доставки</div>
										<div className="inner-delivery__body">
											<div className="inner-delivery__item">
												<div className="inner-delivery__subtitle">Самовивіз</div>
												<div className="inner-delivery__text">Безкоштовно</div>
											</div>
											<div className="inner-delivery__item">
												<div className="inner-delivery__subtitle">Кур’єром</div>
												<div className="inner-delivery__text">Ціна розраховується залежно від радіусу доставки і може становити від 0 до 250 грн.</div>
												<div className="inner-delivery__bottom">
													<a href="" className='inner-delivery__button'>Детальніше</a>
													<span className='_icon-arrow'></span></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}
