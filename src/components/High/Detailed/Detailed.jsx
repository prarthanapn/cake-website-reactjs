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
						At Sugarto, we craft wholesome, delicious bread using natural ingredients and traditional techniques. Baked fresh daily, our offerings include everything from classic sourdough to unique flavors like olive rosemary, with options for all lifestyles, including gluten-free and whole-grain. With a commitment to sustainability and local sourcing, each loaf reflects our passion for quality and care.
						</p>
					</div>
					{/* <!-- end of single service */}
					{/* <!-- single service */}
					<div className="col-md-4 text-center my-3">

						<img src="img/cupcake-icon.png" alt="bread icon" />
						<h6 className="text-uppercase my-3 service-title">cupckakes</h6>
						<p className="w-75 mx-auto text-left service-text">
						At Sugarto, our cupcakes are little bites of happiness, handcrafted with love and the finest ingredients. From classic vanilla and rich chocolate to unique flavors like red velvet and salted caramel, each cupcake is baked fresh daily and topped with our signature creamy frosting. Whether you’re celebrating a special occasion or indulging in a sweet treat, our cupcakes are designed to bring joy to every moment.
						</p>
					</div>
					{/* <!-- end of single service */}
					{/* <!-- single service */}
					<div className="col-md-4 text-center my-3">

						<img src="img/candy-icon.png" alt="bread icon" />
						<h6 className="text-uppercase my-3 service-title">candy</h6>
						<p className="w-75 mx-auto text-left service-text">
						At Sugarto, our candy is a celebration of sweetness and fun, made to delight kids and adults alike. From colorful gummies and chewy caramels to handmade chocolates and nostalgic treats, every piece is crafted with care and the finest ingredients. Whether you’re looking for a playful treat, a gift, or a little indulgence, our candy collection promises to add a touch of sweetness to your day.
						</p>
					</div>
					{/* <!-- end of single service */}
				</div>
			</div>
		</section>
	)
}
