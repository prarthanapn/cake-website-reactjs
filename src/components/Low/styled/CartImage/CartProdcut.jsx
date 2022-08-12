import React from 'react'
import { Image } from './CartProduct.styled'

export const CartProdcut = ({ ...args }) => {
	return (
		<>
			<hr />
			<div className='row mt-3'>
				<div className="col-2 text-center">

					<Image src={args.img} />
				</div>
				<div className="col-8">
					<h3>{args.title}</h3>

				</div>
				<div className="col-2">
				</div>
			</div>

		</>
	)
}

// eslint-disable-next-line react/prop-types
