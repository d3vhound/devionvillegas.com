import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Section = styled.section`
	margin: 2rem auto;
	display: flex;
	flex-wrap: wrap;
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

const HR = styled.hr`
	background: rgba(127, 127, 127, 0.2);
	border: 0;
	height: 1.5px;
	display: block;
`

const Body = styled.p`
	font-weight: 400;
	letter-spacing: 0.2px;
	font-size: 1.6rem;
  line-height: 1.5;
  color: #fff;
  text-rendering: optimizeLegibility;
	margin-bottom: 2rem;
`

const VisitWrapper = styled.div`
	margin: 2rem auto;
`

const Img = styled.img`
	width: 100%;
	height: auto;
`

export default class ProjectHeader extends React.Component {
	render() {
		return (
			<Section>
				<Col1>
					<Text>
						{this.props.projectTitle}
					</Text>
					<HR />
					<Body>{this.props.projectDescription}</Body>
					<Body>{this.props.projectTechnicalDesc}</Body>
					<VisitWrapper>
					<Text>
						<a target="_blank" href={this.props.url}>
							Visit live
						</a>
					</Text>
					</VisitWrapper>
				</Col1>
				<Col2>
					<Img src={this.props.projectImage} />
					<Text>
						{this.props.techStackIcons}
					</Text>
				</Col2>
			</Section>
		)
	}
}