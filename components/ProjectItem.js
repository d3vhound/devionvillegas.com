import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import Waypoint from 'react-waypoint'

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
	max-width: 100%;
	height: auto;
`

const Image = styled.img`
	display: block;
  width: 100%;
  height: auto;
	margin: 2rem auto;
`

const ImageSection = styled.div`
	transform: translateY(40px);
	transition: transform 1s ease-in-out, opacity .8s ease-in-out;

	${props => !props.visible && css`
    opacity: 0;
		transform: translateY(40px);
		background-color: #1b1b1b;
  `}

	${props => props.visible && css`
    opacity: 1;
		transform: translateY(0px);
  `}
`

class Item extends React.Component {
	render() {
		const { project, innerRef } = this.props
		return (
			<ImageSection ref={innerRef} visible={this.props.visible} >
				<Link key={project.name} href={`/projects/${project.name.slice(0, -4)}`}>
					<StyledA>
						<Image src={project.media_url} />
						<Text>{project.title}</Text>
					</StyledA>
				</Link>
			</ImageSection>
		)
	}
}

const ItemWithRef = React.forwardRef((props, ref) => {
  return <Item innerRef={ref} {...props} />
})

export default class ProjectItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible: false
		}
	}

	_handleVisible = () => {
		this.setState({
			visible: true
		})
	}

	render() {
		const { project } = this.props
		return (
			<Waypoint 
				onEnter={this._handleVisible}
			>
				<ItemWithRef project={project} visible={this.state.visible} />
			</Waypoint>
		)
	}
}