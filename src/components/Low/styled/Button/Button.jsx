import React from 'react'
import { LargeButton, SmallButton } from './Button.styled'
// eslint-disable-next-line react/prop-types
export const Button = ({ click, size, text, bgColor, hover, color, holo }) => {
	return (
		<>
			{size
				? < LargeButton onClick={click} bgColor={bgColor} hover={hover} color={color} holo={holo}
					className="btn btn-lg  text-uppercase my-2">
					{text}
				</LargeButton>

				: < SmallButton onClick={click} bgColor={bgColor} hover={hover} color={color} holo={holo}
					className="btn btn-lg  text-uppercase my-2">
					{text}
				</SmallButton>
			}
		</>
	)
}
