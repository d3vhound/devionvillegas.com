import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import Waypoint from 'react-waypoint'
import { Icon } from '../components/Icon'

const Text = styled.p`
	font-weight: 400;
	letter-spacing: -0.2px;
	font-size: 1.8rem;
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
	max-width: 100%;
	height: auto;
	transition: all 300ms ease;
`

const Image = styled.img`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: auto;
	transition: all 0.5s ease;

	${props => !props.visible && css`
    opacity: 0.4;
  `}

	${props => props.visible && css`
    opacity: 1;
  `}
`

const ImageSection = styled.div`
	width: 100%;
	transform: translateY(40px);
	transition: transform 1s ease-in-out, opacity .8s ease-in-out;
	margin: 2rem auto;

	@media (min-width: 1024px) {
		width: 45%;
		margin: 2.5%;
	}

	${props => !props.visible && css`
    opacity: 0;
		transform: translateY(40px);
  `}

	${props => props.visible && css`
    opacity: 1;
		transform: translateY(0px);
  `}
`
const PHWrapper = styled.div`
	position: relative;
  padding-top: 56.25%;
`

const MonoText = styled.p`
	font-weight: 400;
	letter-spacing: -0.2px;
	font-size: 1.2rem;
	line-height: 1.5;
  color: rgba(255, 255, 255, 0.4);
  text-rendering: optimizeLegibility;
	padding: 0;
	margin-top: 2rem;
	text-decoration: none;
`

class Item extends React.Component {
	render() {
		const { project, innerRef, style } = this.props
		return (
			<ImageSection ref={innerRef} visible={this.props.visible}>
				<Link prefetch key={project.name} href={`/projects/${project.name.slice(0, -4)}`}>
					<StyledA>
						<PHWrapper style={style}>
							<Image visible={this.props.visible} src={this.props.visible ? project.media_url : project.placeholder_path} />
						</PHWrapper>
						<MonoText style={style}>{project.type}</MonoText>
						<Text style={style}>{project.title}</Text>
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
		const { project, pathname } = this.props
		return (
			<Waypoint 
				onEnter={this._handleVisible}
			>
				<ItemWithRef style={this.props.style} project={project} visible={this.state.visible} />
			</Waypoint>
		)
	}
}