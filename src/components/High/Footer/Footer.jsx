import React from 'react'

export const Footer = () => {
	return (
		<footer>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6 footer-title py-5">
						<h1 className="text-capitalize text-center">
							<strong className="banner-title">grandmas</strong>
						</h1>
						<div className="footer-icons mt-3 d-flex justify-content-around flex-wrap">
							<a href="#" className="footer-icon">
								<i className="fab fa-facebook"></i>
							</a>
							<a href="#" className="footer-icon">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="#" className="footer-icon">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="#" className="footer-icon">
								<i className="fab fa-google-plus"></i>
							</a>

						</div>
					</div>
					<div className="col-md-6 footer-contact text-center text-capitalize p-5">
						<h3 className="mb-5">contact</h3>
						<p className="d-flex flew-wrap">
							<span className="mr-4 footer-icon">
								<i className="fas fa-map"></i>
							</span>
							<span>
                                123 main street, san diego CA 90101
							</span>
						</p>
						<p className="d-flex flew-wrap">
							<span className="mr-4 footer-icon">
								<i className="fas fa-phone"></i>
							</span>
							<span>
                                123-456-789
							</span>
						</p>
						<p className="d-flex flew-wrap">
							<span className="mr-4 footer-icon">
								<i className="fas fa-envelope"></i>
							</span>
							<span>
                                email@email.com
							</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
