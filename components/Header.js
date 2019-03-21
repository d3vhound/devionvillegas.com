import React from 'react'
import styled from 'styled-components'
import Activity from '../components/Activity'

const Section = styled.section`
	margin: 4rem auto;
	display: flex;
	flex-wrap: wrap;

	@media (min-width: 1024px) {
		margin: 4rem auto 6rem;
	}
`

const Col1 = styled.div`
	width: 100%;
	margin: 2rem 0;

	@media(min-width: 768px) {
		width: 50%;
	}

	hr {
		margin: 1rem 0;
	}
`
const Col2 = styled.div`
	width: 100%;
	margin: 2rem 0;

	@media(min-width: 768px) {
		width: 41.66667%;
	}

	hr {
		margin: 1rem 0;
	}
`

const Text = styled.p`
	font-weight: 400;
	letter-spacing: -0.2px;
	font-size: 1.6rem;
	line-height: 1.5;
  color: #fff;
  text-rendering: optimizeLegibility;
	padding: 0;
	margin: 0;

	a {
		color: #fff;
	}
`

const Body = styled.p`
	font-weight: 400;
	letter-spacing: 0.2px;
	font-size: 1.6rem;
  line-height: 1.5;
  color: #fff;
  text-rendering: optimizeLegibility;
`

const Spacer = styled.div`
	width: 8.33333%;
	padding: 0;
`

const HR = styled.hr`
	background: rgba(127, 127, 127, 0.2);
	border: 0;
	height: 1.5px;
	display: block;
`

const EndBlock = styled.div`
	margin-top: 5rem;
`



export default class Header extends React.Component {
	render() {
		return (
			<Section>
				<Col1>
					<Text>
						<a href="mailto:devion.villegas@ttu.edu">							
							devion.villegas@ttu.edu
						</a>
					</Text>
					<HR />
					<br />
					<Body>
						Devion Villegas is a software developer helping enterprise and startup organizations build web applications, PWAs, mobile apps, and cloud infrastructure.
					</Body>
					{/* <EndBlock>
						<Text>Selected Work, 2016—2018</Text>
						<Text>↓</Text>
					</EndBlock> */}
				</Col1>
				<Spacer />
				<Col2>
					<Text>Activity</Text>
					<HR />
					<br />
					<Activity spotify={this.props.spotify} gh={this.props.ghactivity} />
				</Col2>
			</Section>
		)
	}
}