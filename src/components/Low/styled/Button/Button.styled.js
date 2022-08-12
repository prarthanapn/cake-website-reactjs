
import styled from 'styled-components'

export const LargeButton = styled.a`
	font-size: 24px;
	font-size: 1.5rem;
	background-color: ${(props) => props.bgColor ? props.bgColor : 'none'};
	color: ${(props) => props.color ? props.color : '#000'};
	border: 3.2px solid #000;
	border: 0.2rem solid #000;
	&:hover{
		background: ${(props) => props.hover ? props.hover : '#000'};
		color: #ef7998;
		color:  ${(props) => props.holo ? props.holo : '#ef7998'};;;

	}
`

export const SmallButton = styled.button`
	
	background-color: ${(props) => props.bgColor ? props.bgColor : 'none'};
	color: ${(props) => props.color ? props.color : '#000'};
	border-color: #000 !important;
	&:hover{
		background: ${(props) => props.hover ? props.hover : '#000'};
		color: #ef7998;
		color:  ${(props) => props.holo ? props.holo : '#ef7998'};;;
		
	}
`
