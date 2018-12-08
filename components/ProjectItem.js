import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import Waypoint from 'react-waypoint'

const Text = styled.p`
	font-weight: 400;
	letter-spacing: -0.2px;
	font-size: 2rem;
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

	${props => props.pressed && css`
		/* transform: scale(.5, .5); */
		width: 35%;
		position: relative;
		margin-right: 50px;
	`}
`

const ImageSection = styled.div`
	transform: translateY(40px);
	transition: transform 1s ease-in-out, opacity .8s ease-in-out;
	margin: 4rem auto;

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

	${props => props.pressed && css`
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		overflow-x: scroll;
		padding-top: 0;
	`}
`

class Item extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pressed: false
		}
	}
	render() {
		const { project, innerRef } = this.props
		return (
			<ImageSection pressed={this.state.pressed} ref={innerRef} visible={this.props.visible} >
				{/* <Link prefetch key={project.name} href={`/projects/${project.name.slice(0, -4)}`}> */}
					<StyledA 
						onClick={() => {
							console.log('test')
							this.setState({ pressed: true })
						}}
					>
						{/* <Image src={project.media_url} /> */}
						<PHWrapper pressed={this.state.pressed}>
							<Image pressed={this.state.pressed} visible={this.props.visible} src={this.props.visible ? project.media_url : project.placeholder_path} />
							{this.state.pressed && 
								<>
									<Image pressed={this.state.pressed} visible={this.props.visible} src={this.state.pressed ? project.media_url : ""} />
									<Image pressed={this.state.pressed} visible={this.props.visible} src={this.state.pressed ? project.media_url : ""} />
									<Image pressed={this.state.pressed} visible={this.props.visible} src={this.state.pressed ? project.media_url : ""} />
									<Image pressed={this.state.pressed} visible={this.props.visible} src={this.state.pressed ? project.media_url : ""} />
								</>
							}
						</PHWrapper>
						<Text>{project.title}</Text>
					</StyledA>
				{/* </Link> */}
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