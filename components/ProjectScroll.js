import React from 'react'
import Waypoint from 'react-waypoint'
import styled from 'styled-components'

const Container = styled.section`
	display: flex;
	padding-top: 6rem;
`

class Item extends React.Component {
	render() {
		const { innerRef } = this.props
		return (
			<Container ref={innerRef}>
				<h2>
					Keep scrolling to load - {this.props.nextProject}
				</h2>
			</Container>
		)
	}
}

const ItemWithRef = React.forwardRef((props, ref) => {
  return <Item innerRef={ref} {...props} />
})


export default class ProjectScroll extends React.Component {
	constructor(props) {
		super(props)
		this.state = { loading: false }
	}

	loadNextProject = () => {
		console.log("loading")
		setTimeout(() => console.log("loaded"), 1000)
	}

	render() {
		return (
			<Waypoint onEnter={this.loadNextProject} topOffset="10px">
				<ItemWithRef nextProject={this.props.nextProject} visible={this.state.visible} />
			</Waypoint>
		)
	}
}