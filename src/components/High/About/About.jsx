import React from 'react'
import ImageFrame from '../../Low/styled/ImageFrame/ImageFrame'
import image from '../../../assets/images/img/sweets-1.jpeg'
export const About = () => {
	return (
		<section className="about py-5" id="about">
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-5">
						<h1 className="text-capitalize">about <strong className="banner-title">us</strong></h1>
						<p className="my-4 text-muted w-75">
						Our journey began in a cozy kitchen, fueled by a shared passion for baking and a love for creating moments of joy. Over the years, we’ve grown into  a popular local spot, but our commitment to crafting delicious, beautiful cakes has remained constant.

Every recipe we use is a blend of tradition, innovation, and a sprinkle of love, designed to bring a smile to your face.
						</p>
						<a href="#" className="btn btn-black text-uppercase">explore</a>
					</div>
					<div className="col-10 mx-auto col-md-6 my-5 align-self-center">
						<ImageFrame image={image} />
					</div>
				</div>
			</div>
		</section>
	)
}
