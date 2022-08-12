/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Button } from '../../Low/styled/Button/Button'
import { Product } from '../../Low/styled/Product/Product'
import { ProductConextConsumer } from '../../../context/ProductContext'
export const Store = () => {
	const { products } = ProductConextConsumer()
	const [data, setdata] = useState(products)
	const [categories, setcategories] = useState([])
	const [input, setinput] = useState('')
	const buttonHandler = (catid) => {
		// eslint-disable-next-line eqeqeq
		if (catid != 0) {
			const res = products.filter((item) => item.catid === catid)
			setdata(res)
		} else {
			setdata(products)
		}
	}
	const inputHandler = (event) => {
		setinput(event.target.value)
		const filtered = products.filter((value) => {
			const pattern = new RegExp('^' + event.target.value + '', 'gi')
			return pattern.test(value.title) === true
		})
		setdata(filtered)
	}

	return (
		<section id="store" className="store py-5">
			<div className="container">
				{/* section title */}
				<div className="row">
					<div className="col-10 mx-auto col-sm-6 text-center">
						<h1 className="text-capitalize">our <strong className="banner-title">store</strong></h1>
					</div>
				</div>
				{/* end section title */}
				{/* fitler buttons */}
				<div className="row">
					<div className="col-lg-8 mx-auto d-flex justify-content-around sortBtn flex-wrap">
						<Button as="button" size={false} click={() => buttonHandler(0)} text="All" />
						{!data
							? <p>No Data Found</p>
							: products.map((item, index) => {
								return (
									<Button key={index} as="button" size={false}
										click={() => buttonHandler(item.catid)} text={item.category} />
								)
							})}

					</div>
				</div>
				{/* end of filter buttons */}
				{/* search box */}
				<div className="row">
					<div className="col-10 mx-auto col-md-6">

						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text search-box" id="search-icon">
									<i className="fas fa-search"></i>
								</span>
							</div>
							<input type="text" value={input} onChange={(e) => inputHandler(e)} className="form-control" placeholder="item..." id="search-item" />
						</div>
					</div>
				</div>
				{/* end of search box */}
				{/* store items */}
				<div className="row store-items" id="store-items">
					{data.map((item, index) => {
						return (
							<Product key={index} title={item.title} price={item.price} img={item.img} />
						)
					})}
					{/* end of single item */}

				</div>
				{/* end of store items */}
			</div>
		</section>
	)
}
