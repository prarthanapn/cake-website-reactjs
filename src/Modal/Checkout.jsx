/* eslint-disable no-unused-vars */
import React from 'react'
import { CartProdcut } from '../components/Low/styled/CartImage/CartProdcut'
import { ProductConextConsumer } from '../context/ProductContext'
export const Checkout = ({ ...args }) => {
	const { cart, setcart } = ProductConextConsumer()
	return (
		<>

			<div style={{ display: 'block', marginRight: -4 }} className="modal " tabIndex="-1" role="dialog">
				<div className="modal-dialog  modal-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Cart Summary</h5>
							<button onClick={() => args.event(false)} type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body" style={{ maxHeight: 400, overflowY: 'scroll' }}>
							{cart.products.map((element, index) => <CartProdcut key={index} title={element.title} img={element.img} />)
							}
							<hr />
						</div>
						<div className="modal-footer">
							<button type="button" disabled className="btn btn-outline-warning">${cart.Price}</button>
							<button type="button" className="btn btn-info">Checkout</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
