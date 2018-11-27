import * as React from 'react'
import styled from 'styled-components'
import SpotifyLogo from '../assets/spotify_logo.svg'

const ListItemWrapper = styled.div`
	display: flex;
	flex-direction: row;
	/* margin: 1rem 0; */
	padding: 1rem 0;
`

const ListItemLogo = styled.div`
	width: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ListItemContainer = styled.div`
	width: 90%;
	padding-left: 5px;
	display: flex;
	justify-content: center;
	flex-direction: column;

	span {
		color: #b8b8b8;
	}

	a {
		color: rgb(255, 255, 255);
	}
`

const ListItemText = styled.p`
	font-size: 1.2rem;
	margin: 0;
	padding: 0;
	line-height: 1.5;
	text-rendering: optimizeLegibility;
`

export default class GhActivity extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			items: []
		}
	}

	componentWillMount() {
		this.setState({
			items: this.props.spotify.slice(0, 3)
		})
	}

	render() {
		return (
			<div>
				{this.state.items.map((item) => {
					return (
						<ListItemWrapper key={item.track.id}>
							<ListItemLogo>
								<SpotifyLogo />
							</ListItemLogo>
							<ListItemContainer>
								<ListItemText>
									Listened to {item.track.artists[0].name} - {item.track.name}
								</ListItemText>
							</ListItemContainer>
						</ListItemWrapper>
					)
				})}
			</div>
		)
	}
}