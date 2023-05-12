import React from 'react'
import Product from './Product'

export default function Products({ products, addBasket }) {
	return (
		<div className="products">
			<div className="products__container">
				<div className="products__title">Популярні товари та сезонні пропозиції</div>
				<div className="products__body">
					{products.map((product) => (
						<div key={product.id} className={`products__column ${product.backgroundChange}`}>
							<Product product={product} addBasket={addBasket} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
