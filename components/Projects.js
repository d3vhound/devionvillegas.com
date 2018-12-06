import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import ProjectItem from './ProjectItem';

const Section = styled.section`
	margin: 4rem auto;
	display: block;
`

export default class Projects extends React.Component {
	render() {
		return (
			<Section>
				{this.props.projects.map(project => (
					<ProjectItem key={project.name} project={project} />
				))}
			</Section>
		)
	}
}