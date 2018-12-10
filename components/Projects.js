import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Section = styled.section`
	margin: 2rem auto 4rem;
	display: flex;
	flex-flow: wrap;
	@media (min-width: 1024px) {
		margin: 2rem -2.5rem 4rem;
	}
`

const HR = styled.hr`
	background: rgba(127, 127, 127, 0.2);
	border: 0;
	height: 1.5px;
	display: block;
	margin: 1rem 0;
	max-width: 700px;
`

const Text = styled.p`
	font-weight: 400;
	letter-spacing: -0.2px;
	font-size: 2rem;
	line-height: 1.5;
  color: #fff;
  text-rendering: optimizeLegibility;
	padding: 0;

	a {
		color: #fff;
	}
`

const Wrapper = styled.section`
	position: relative;
`

export default class Projects extends React.Component {
	render() {
		return (
			<Wrapper>
			<Text>
				Work
			</Text>
			<Section>
				{this.props.projects.map(project => (
					<ProjectItem windowWidth={this.props.windowWidth} key={project.name} project={project} />
				))}
			</Section>
			</Wrapper>
		)
	}
}