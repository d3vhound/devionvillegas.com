import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.nav`
	width: 100%;
	background: #000;
	position: relative;
	padding: 1rem 0;
	display: flex;
`

const Container = styled.div`
	width: 50%;
	/* border: 1px red solid; */
	/* max-width: 1428px; */
	height: 100%;
	margin: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem 0;
`

const Title = styled.h1`
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 1.5;
	cursor: pointer;
	text-transform: uppercase;
	color: #FFF;
	letter-spacing: 0.7px;
	text-rendering: optimizeLegibility;
	margin-right: 2rem;
`

const NavRight = styled.div`
	width: 50%;
	align-items: center;
	justify-content: flex-end;
	display: flex;
`

const Text = styled.p`
	font-weight: 400;
	letter-spacing: -0.2px;
	font-size: 1.2rem;
	line-height: 1.5;
  color: #fff;
  text-rendering: optimizeLegibility;
	padding: 0;
	margin-left: 2rem;
`

const LNSpan = styled.span`
	color: #707070;
`

export default class Navbar extends React.Component {
	render() {
		return (
			<Wrapper>
				<Container>
					<Link href="/">
						<Title>Devion Villegas</Title>
					</Link>
				</Container>
				<NavRight>
					<a target="_blank" href="https://github.com/d3vhound">
						<img src="/static/img/github-icon-1.svg" width="35px" />
					</a>
				</NavRight>
			</Wrapper>
		)
	}
}
