import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

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

const StyledA = styled.a`
	color: #fff;
	cursor: pointer;
	text-decoration: underline;
`

export default class Projects extends React.Component {
	render() {
		return (
			<div>
				{this.props.projects.map(project => (
					<Link key={project.name} href={`/projects/${project.name.slice(0, -4)}`}>
						<StyledA>
							<Text>{project.title}</Text>
						</StyledA>
					</Link>
				))}
			</div>
		)
	}
}