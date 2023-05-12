import React, { useState } from 'react'

export default function Basket({ elem, removeFromBasket, updateTotalPrice }) {
	let [count, setCount] = useState(elem.quantity);
	let [price, setPrice] = useState(elem.price);

	function addCount() {
		setCount((prevCount) => prevCount + 1);
		setPrice((prevPrice) => prevPrice + elem.price);
		updateTotalPrice(elem.price);
	}

	function removeCount() {
		if (count > 1) {
			setCount((prevCount) => prevCount - 1);
			setPrice((prevPrice) => prevPrice - elem.price);
			updateTotalPrice(-elem.price);
		}
	}

	return (<>
		<div className="basket__image">
			<img src={`/images/${elem.image}`} alt="" />
		</div>
		<div className="basket__inner">
			<div className="basket__row">
				<div className="basket__name">{elem.name} <br /> {elem.title}</div>
				<div
					className="_icon-cansel"
					onClick={() => removeFromBasket(elem.id)}>
				</div>
			</div>
			<div className="basket__row">
				<div className="basket__counter">
					<span onClick={removeCount}>-</span>
					<div className="basket__count">{count}</div>
					<span onClick={addCount}>+</span>
				</div>
				<div className="basket__price">{price} ₴</div>
			</div>
		</div >
	</>
	)
}
