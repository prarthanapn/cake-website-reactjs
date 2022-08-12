import React, { useState } from 'react'
import { ProductConextConsumer } from '../../../context/ProductContext'
import { Checkout } from '../../../Modal/Checkout'
export const Navbar = () => {
	const [modal, setmodal] = useState(false)
	const { cart } = ProductConextConsumer()
	return (
		<>
			{modal ? <Checkout event={setmodal} /> : null}
			<header id="header">
				<nav className="navbar navbar-expand-lg px-4">

					<a href="#" className="navbar-brand">
						<img src="/img/logo.svg" alt="main icon" />
					</a>
					<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
						<span className="toggler-icon">
							<i className="fas fa-bars"></i>
						</span>
					</button>
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="navbar-nav text-capitalize mx-auto">
							<li className="nav-item active">
								<a href="#header" className="nav-link">home</a>
							</li>
							<li className="nav-item active">
								<a href="#about" className="nav-link">about</a>
							</li>
							<li className="nav-item active">
								<a href="#store" className="nav-link">store</a>
							</li>
							<li className="nav-item active">
								<a href="#services" className="nav-link">services</a>
							</li>
							<li className="nav-item active">
								<a href="#cakes" className="nav-link">order</a>
							</li>
						</ul>
						<div className="nav-info-items d-none d-lg-flex">
							{/* <!-- single info --> */}
							<div className="nav-info align-items-center d-flex justify-content-between mx-lg-5">
								<span className="info-icon mx-lg-3">
									<i className="fas fa-phone"></i>
								</span>
								<p className="mb-0">+ 123 456 789 </p>
							</div>
							{/* <!-- single info --> */}
							<div onClick={() => setmodal(true)} id="cart-info" className="  nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5">
								<span className="cart-info__icon mr-lg-3">
									<i className="fas fa-shopping-cart"></i>
								</span>
								<p className="mb-0 text-capitalize ">
									<span id="item-count">{cart.Items} </span>
									items - $
									<span className="item-total">
										{cart.Price}
									</span>
								</p>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	)
}
