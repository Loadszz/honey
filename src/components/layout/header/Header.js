import React, { useState, useEffect } from 'react'
// import { RxCross2 } from "react-icons/rx";
import Basket from './basket/Basket';
import Link from 'next/link';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Header({ basket, removeFromBasket }) {
	let [burger, setBurger] = useState(false)
	let [cartOpen, setCartOpen] = useState(false)
	const [totalPrice, setTotalPrice] = useState(0);

	let [linkOpen, setLinkOpen] = useState(false)

	useEffect(() => {
		const newTotalPrice = basket.reduce((total, item) => total + item.price, 0);
		setTotalPrice(newTotalPrice);
	}, [basket]);

	function updateTotalPrice(priceDifference) {
		setTotalPrice((prevTotalPrice) => prevTotalPrice + priceDifference);
	}
	const openPopup = () => {
		setCartOpen(true);
		document.body.classList.add('lock');
	};
	const closePopup = () => {
		setCartOpen(false);
		if (burger == true) {
			document.body.classList.add('lock');
		} else {
			document.body.classList.remove('lock');
		}
	};
	const burgerToogle = () => {
		setBurger(burger = !burger)
		if (burger == true) {
			document.body.classList.add('lock');
		} else {
			document.body.classList.remove('lock');
		}
	}
	const burgerClose = () => {
		setBurger(burger = !burger)
		if (burger == false) {
			document.body.classList.remove('lock');
		}
	}

	return (
		<header
			className={`${burger ? "menu-open" : 'header'}`}>
			<div className="header__container">
				<div className="header__body">
					<Link href="/" className="header__logo _icon-logo">
					</Link>
					<div className="header__menu menu">
						<button
							type="button"
							className="menu__icon icon-menu"
							onClick={burgerToogle}
						><span></span></button>
						<nav className="menu__body">
							<ul
								onClick={burgerClose}
								className="menu__list">
								<li className="menu__item"><a href="" className="menu__link">Солодощі</a>
									<span
										className='_icon-cheveron-down'
										onClick={isMobile ? () => setLinkOpen(!linkOpen) : undefined}></span>
									<ul className={`menu__sub-list ${linkOpen ? 'active' : ''}`}>
										<li className="menu__sub-item">
											<Link href={`/menu/${'Торти'}`} className="menu__sub-link">Торти</Link>
										</li>
										<li className="menu__sub-item">
											<Link href={`/menu/${'Десерти'}`} className="menu__sub-link">Десерти</Link>
										</li>
										<li className="menu__sub-item">
											<Link href={`/menu/${'Еклери'}`} className="menu__sub-link">Еклери</Link>
										</li>
										<li className="menu__sub-item">
											<Link href={`/menu/${'Макарони'}`} className="menu__sub-link">Макарони</Link>
										</li>
										<li className="menu__sub-item">
											<Link href={`/menu/${'Випічка'}`} className="menu__sub-link">Випічка</Link>
										</li>
										<li className="menu__sub-item">
											<Link href={`/menu/${'Цукерки'}`} className="menu__sub-link">Цукерки</Link>
										</li>
										<li className="menu__sub-item">
											<Link href={`/menu/${'Морозиво'}`} className="menu__sub-link">Морозиво</Link>
										</li>
										<li className="menu__sub-item">
											<Link href={`/menu/${'Шоколадні пасти'}`} className="menu__sub-link">Шоколадні пасти</Link>
										</li>
									</ul>
								</li>
								<li className="menu__item">
									<Link href="/menu" className="menu__link">Меню ресторану</Link>
								</li>
								<li className="menu__item"><a href="" className="menu__link">Контакти</a></li>
							</ul>
						</nav>
					</div>
					<div className="header__basket basket">
						<div
							onClick={openPopup}
							className="basket__cart _icon-basket"><span>{basket.length}</span></div>
						<div className={`basket__show ${cartOpen ? 'active' : ''}`}>
							<div className="basket__block">
								<div className="basket__item">
									<div className="basket__title">Ваш кошик</div>
									<div
										className="_icon-cansel"
										onClick={closePopup}>
									</div>
								</div>
								{basket.map((elem) => (
									<div className="basket__body">
										<Basket
											key={elem.id}
											elem={elem}
											removeFromBasket={removeFromBasket}
											updateTotalPrice={updateTotalPrice} />
									</div>))}
								<div className="basket__bottom">
									{basket.length > 0 ? <div className="basket__sum">Разом: <span>{totalPrice} ₴</span>
									</div> : <div className='basket__clear'>В кошику порожньо!</div>}
									<div
										className="basket__continue"
										onClick={closePopup}>Продовжити покупки</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
