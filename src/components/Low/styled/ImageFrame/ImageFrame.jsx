import React from 'react'
import { StyledImageFrame } from './ImageFrame.styled'

// eslint-disable-next-line react/prop-types
const ImageFrame = ({ image }) => {
	return (
		<StyledImageFrame >
			<img src={image} className="img-fluid" alt="" />
		</StyledImageFrame>
	)
}

export default ImageFrame
