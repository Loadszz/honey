import React, { useState } from 'react'
import Link from 'next/link'
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Product({ product, addBasket }) {
	let [openList, setOpenList] = useState({ openList1: false, openList2: false })

	const toogle1 = () => {
		if (isMobile) {
			setOpenList({ ...openList, openList1: !openList.openList1 })
		}
	}
	const toogle2 = () => {
		if (isMobile) {
			setOpenList({ ...openList, openList2: !openList.openList2 })
		}
	}

	return (<>
		<div className="products__image">
			<img src={`/images/${product.image}`} alt="" />
		</div>
		<div className="products__name">{product.name}</div>
		<div className="products__title">{product.title}</div>
		{product.flavor.length && product.weight.length > 0 ?
			<div className="products__item item-block">
				<div className="item-block__list">
					<div
						className="item-block__inner"
						onClick={toogle1}>
						<div className="item-block__title">Обрати смак</div>
						<span className='_icon-cheveron-down'></span>
					</div>
					{<div className={`item-block__value ${openList.openList1 ? 'active' : ''}`}>
						{product.flavor.map((value, index) => (
							<div key={index} className='item-block__name'>{value.item}</div>
						))}</div>}
				</div>
				<div className="item-block__list">
					<div
						className="item-block__inner"
						onClick={toogle2}>
						<div className="item-block__title">Вага</div>
						<span className='_icon-cheveron-down'></span>
					</div>
					<div className={`item-block__value ${openList.openList2 ? 'active' : ''}`}>{product.weight.map((value, index) => (
						<div key={index} className='item-block__name'>{value}</div>
					))}</div>
				</div>
			</div>
			: ''}
		<div className="products__price">{product.price} ₴</div>
		<div className="products__inner">
			<a
				href='#'
				className="products__button button"
				onClick={(event) => (addBasket(product), event.preventDefault())}>
				{product.button}
			</a>
			<Link key={product.id} href={`/details/${product.id}`} className="products__link">{product.link}</Link>
			<div className={`products__category ${product.category} _icon-circle-5`}></div>
		</div>
	</>
	)
}
