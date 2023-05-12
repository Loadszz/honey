import React from 'react'
import Product from './Product'

export default function Interesting({ products, addBasket }) {
	return (
		<section className="interesting">
			<div className="interesting__container">
				<div className="interesting__title">Вас також може зацікавити</div>
				<div className="interesting__body">
					{products
						.filter(product => product.interesting.includes('Y'))
						.map(product => (
							<div key={product.id} className={`products__column ${product.backgroundChange}`}>
								<Product product={product} addBasket={addBasket} />
							</div>
						))}
				</div>
			</div>
		</section>
	)
}
