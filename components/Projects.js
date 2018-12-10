import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import ProjectItem from './ProjectItem'
import { Transition, Spring } from 'react-spring'

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
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.pathname !== nextProps.pathname) {
			return true
		}
		return false
	}
	render() {
		const { pathname } = this.props
		return (
			<Wrapper>
			{this.props.pathname === "/" && <Text>Work</Text>}
			<Section>
				{/* {this.props.projects.map(project => (
					<ProjectItem pathname={this.props.pathname} key={project.name} project={project} />
				))} */}
				<Transition
					items={this.props.projects} 
					keys={item => item.path}
					from={{ 
						opacity: 1,
						transform: "translateY(0px)"
					}}
					enter={{ 
						opacity: 1 
					}}
					leave={{ 
						opacity: 0,
						transform: "translateY(100px)"
					}}
					trail={100}
				>
					{item => props =>
						<ProjectItem style={props} pathname={this.props.pathname} project={item} pathname={pathname} />
					}
				</Transition>
				</Section>
			</Wrapper>
		)
	}
}