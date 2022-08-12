import React from 'react'
import { Button } from '../../Low/styled/Button/Button'
export const Banner = () => {
	return (
		<div className="container-fluid" >
			<div className="row max-height justify-content-center align-items-center">
				<div className="col-10 mx-auto banner text-center">
					<h1 className="text-capitalize">
						welcome to <strong className="banner-title">grandmas</strong>
					</h1>
					<Button size={true} text="explore"/>
				</div>
				{/* <!-- cart --> */}
				<div className="cart" id="cart">
					{/* <!-- cart item --> */}
					<div className="cart-item d-flex justify-content-between text-capitalize my-3">
						<img src="/images/img-cart/cake-2.jpeg" className="img-fluid rounded-circle" id="item-img" alt="" />
						<div className="item-text">
							<p id="cart-item-title" className="font-weight-bold mb-0">
								cart item</p>
							<span>$</span>
							<span id="cart-item-price" className="cart-item-price mb-0">10.99</span>

						</div>
						<a href="#" id="cart-item-remove" className="cart-item-remove">
							<i className="fas fa-trash"></i>
						</a>
					</div>
					{/* <!-- end of cart item -->
				<!-- cart item --> */}
					<div className="cart-item d-flex justify-content-between text-capitalize my-3">
						<img src="/images/img-cart/cupcake-1.jpeg" className="img-fluid rounded-circle" id="item-img" alt="" />
						<div className="item-text">
							<p id="cart-item-title" className="font-weight-bold mb-0">
								cart item</p>
							<span>$</span>
							<span id="cart-item-price" className="cart-item-price mb-0">10.99</span>

						</div>
						<a href="#" id="cart-item-remove" className="cart-item-remove">
							<i className="fas fa-trash"></i>
						</a>
					</div>
					{/* <!-- end of cart item --> */}
					{/* <!-- total --> */}
					<div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
						<h5>total</h5>
						<h5>$ <strong id="cart-total" className="font-weight-bold">10.00</strong></h5>
					</div>

					<div className="cart-buttons-container mt-3 d-flex justify-content-between">
						<a href="#" id="clear-cart" className="btn btn-black text-uppercase">clear cart</a>
						<a href="#" id="clear-cart" className="btn btn-pink text-uppercase">checkout</a>
					</div>
				</div>
			</div>
		</div>
	)
}
