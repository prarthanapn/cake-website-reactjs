import React from 'react'

export const Detailed = () => {
	return (
		<section id="services" className="services py-5">
			<div className="container">
				<div className="row">
					{/* <!-- single service */}
					<div className="col-md-4 text-center my-3">

						<img src="img/bread-icon.png" alt="bread icon" />
						<h6 className="text-uppercase my-3 service-title">bread</h6>
						<p className="w-75 mx-auto text-left service-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla rem quia expedita necessitatibus, tempore
                            veritatis quod praesentium laboriosam nesciunt placeat.
						</p>
					</div>
					{/* <!-- end of single service */}
					{/* <!-- single service */}
					<div className="col-md-4 text-center my-3">

						<img src="img/cupcake-icon.png" alt="bread icon" />
						<h6 className="text-uppercase my-3 service-title">cupckakes</h6>
						<p className="w-75 mx-auto text-left service-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla rem quia expedita necessitatibus, tempore
                            veritatis quod praesentium laboriosam nesciunt placeat.
						</p>
					</div>
					{/* <!-- end of single service */}
					{/* <!-- single service */}
					<div className="col-md-4 text-center my-3">

						<img src="img/candy-icon.png" alt="bread icon" />
						<h6 className="text-uppercase my-3 service-title">candy</h6>
						<p className="w-75 mx-auto text-left service-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla rem quia expedita necessitatibus, tempore
                            veritatis quod praesentium laboriosam nesciunt placeat.
						</p>
					</div>
					{/* <!-- end of single service */}
				</div>
			</div>
		</section>
	)
}
