/* eslint-disable no-unused-vars */
import React from 'react'
import { ProductConextConsumer } from '../../../../context/ProductContext'
// eslint-disable-next-line react/prop-types
export const Product = ({ ...args }) => {
	const { cart, setcart } = ProductConextConsumer()
	const cartHandler = (product) => {
		const old = cart.products
		old.push(product)
		cart.setProducts(old)
		cart.setItems(parseInt(cart.Items) + 1)

		let temp = 0
		cart.products.forEach((element) => {
			temp += parseInt(element.price)
		})
		cart.setPrice(temp)
	}
	return (
		<div className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets" data-item="sweets">
			<div className="card single-item">
				<div className="img-container">
					<img src={args.img} className="card-img-top store-img" alt="" />
					<span onClick={() => cartHandler(args)} className="store-item-icon">
						<i className="fas fa-shopping-cart"></i>
					</span>
				</div>
				<div className="card-body">
					<div className="card-text d-flex justify-content-between text-capitalize">
						<h5 id="store-item-name"> {args.title}</h5>
						<h5 className="store-item-value">$ <strong id="storem-item-price" className="font-weight-bold">{args.price}</strong></h5>
					</div>
				</div>
			</div>
		</div>
	)
}
