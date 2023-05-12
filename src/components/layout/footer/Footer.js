import React, { useEffect } from 'react'
import Link from 'next/link';
import MyScriptLoader from '@/components/MyScriptLoader';



export default function Footer() {

	return (
		<>
			<MyScriptLoader />
			<footer className='footer'>
				<div className="footer__container">
					<div className="footer__body">
						<div className="footer__inner-top top-inner">
							<a href="" className="top-inner__logo _icon-logo"></a>
							<div className="top-inner__body">
								<div className="top-inner__column">
									<div className="top-inner__title">Контакти</div>
									<div data-da=".footer__inner-top, 767,0" className="top-inner__social">
										<a href='' className="top-inner__fb _icon-facebook-negative"></a>
										<a href='' className="top-inner__instagram _icon-instagram-negative"></a>
									</div>
									<div className="top-inner__mail">
										<a href='mailto:honey.cafe.online@gmail.com'>honey.cafe.online@gmail.com</a>
									</div>
									<div className="top-inner__tel">
										<a href='tel:+380671271921'>+38 067 127 19 21</a>
									</div>
									<div className="top-inner__info">Прийом дзвінків щоденно
										<br />08:00 - 22:00</div>
								</div>
								<div className="top-inner__column">
									<div className="top-inner__title">Меню</div>
									<ul className="top-inner__list">
										<li className="top-inner__link">
											<a href={`/menu/${'Торти'}`}>Торти</a>
										</li>
										<li className="top-inner__link">
											<Link href={`/menu/${'Десерти'}`}>Десерти</Link>
										</li>
										<li className="top-inner__link">
											<Link href={`/menu/${'Еклери'}`}>Еклери</Link>
										</li>
										<li className="top-inner__link">
											<Link href={`/menu/${'Макарони'}`}>Макарони</Link>
										</li>
										<li className="top-inner__link">
											<Link href={`/menu/${'Випічка'}`}>Випічка</Link>
										</li>
										<li className="top-inner__link">
											<Link href={`/menu/${'Цукерки'}`}>Цукерки</Link>
										</li>
										<li className="top-inner__link">
											<Link href={`/menu/${'Морозиво'}`}>Морозиво</Link>
										</li>
										<li className="top-inner__link">
											<Link href={`/menu/${'Шоколадні пасти'}`}>Шоколадні пасти</Link>
										</li>
										<li className="top-inner__link">
											<a href="">Контакти</a>
										</li>
									</ul>
								</div>
								<div className="top-inner__column">
									<div className="top-inner__title">Honey у Києві</div>
									<div className="top-inner__addres">
										<div className="top-inner__name">Honey на Подолі</div>
										<span>вул. Нижній Вал, 19/21</span>
									</div>
									<div className="top-inner__addres">
										<div className="top-inner__name">Honey на Золотих</div>
										<span>вул. Ярославів Вал, 20</span>
									</div>
									<div className="top-inner__addres">
										<div className="top-inner__name">Honey у ЦУМі</div>
										<span>вул. Хрещатик, 38</span>
									</div>
								</div>
							</div>
						</div>
						<div className="footer__inner-bot">
							<div className="footer__title">© 2023 Honey Cafe</div>
							<div className="footer__item">
								<div className="footer__public">Публічна оферта</div>
								<div className="footer__cookies">Файли кукіс</div>
							</div>
						</div>
					</div>
				</div>
			</footer >
		</>
	)
}
