import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.nav`
	width: 100%;
	background: #000;
	position: 'relative';
	padding: 1rem 0;
`

const Container = styled.div`
	width: 100%;
	/* border: 1px red solid; */
	/* max-width: 1428px; */
	height: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem 0;
`

const Title = styled.h1`
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 1.5;
	text-transform: uppercase;
	color: #FFF;
	letter-spacing: 0.7px;
	text-rendering: optimizeLegibility;
`

const LNSpan = styled.span`
	color: #707070;
`

export default class Navbar extends React.Component {
	render() {
		return (
			<Wrapper>
				<Container>
					<Title>Devion Villegas</Title>
				</Container>
			</Wrapper>
		)
	}
}
