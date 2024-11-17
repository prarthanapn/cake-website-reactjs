import React from 'react'

export const Order = () => {
	return (
		<section id="cakes" className="cakes py-5">
			<div className="container">
				{/* section title */}
				<div className="row">
					<div className="col-10 mx-auto col-sm-6 text-center">
						<h1 className="text-capitalize">order <strong className="banner-title">cake</strong></h1>
					</div>
				</div>
				{/* end section title */}
				<div className="row">
					{/* single cake */}
					<div className="col-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center">
						<h3 className="py-3">birthday cake</h3>
						<div className="text-muted">
							<p className="my-3">birthday cake with a name</p>
							<p className="my-3">custom ingredients</p>
							<p className="my-3">custom size</p>
							<p className="my-3">custom design</p>
							<button type="button" className="btn btn-pink text-capitalize mb-3">order now</button>
							<p className="text-lowercase mb-4">starting at ₹350</p>
							<img src="img/trans-cake.png" className="img-fluid" alt="" />
						</div>
					</div>
					{/* end of single cake */}
					{/* single cake */}
					<div className="col-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center">
						<h3 className="py-3">custom cake</h3>
						<div className="text-muted">
							<p className="my-3">birthday cake with a name</p>
							<p className="my-3">custom ingredients</p>
							<p className="my-3">custom size</p>
							<p className="my-3">custom design</p>
							<button type="button" className="btn btn-pink text-capitalize mb-3">order now</button>
							<p className="text-lowercase mb-4">starting at ₹500</p>
							<img src="img/trans-custom.png" className="img-fluid" alt="" />
						</div>
					</div>
					{/* end of single cake */}
					{/* single cake */}
					<div className="col-11 mx-auto col-md-6 col-lg-4 my-4 text-capitalize text-center">
						<h3 className="py-3">wedding cake</h3>
						<div className="text-muted">
							<p className="my-3">birthday cake with a name</p>
							<p className="my-3">custom ingredients</p>
							<p className="my-3">custom size</p>
							<p className="my-3">custom design</p>
							<button type="button" className="btn btn-pink text-capitalize mb-3">order now</button>
							<p className="text-lowercase mb-4">starting at ₹650</p>
							<img src="img/trans-wedding.png" className="img-fluid" alt="" />
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
