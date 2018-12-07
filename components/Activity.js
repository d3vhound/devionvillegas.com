import React from 'react'
import styled from 'styled-components'
import SpotifyLogo from '../assets/spotify_logo.svg'
import { format, formatDistanceStrict, formatDistance, formatRelative, subDays } from 'date-fns'
import GHLogo from '../assets/github_logo.svg'

const ListItemWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 1rem 0;
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

const ListItemLogo = styled.div`
	width: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const ListItemText = styled.p`
	font-size: ${props => props.time ? '1rem' : '1.2rem'};
	color: ${props => props.time ? '#b8b8b8' : '#ffffff'};
	margin: 0;
	padding: 0;
	line-height: 1.5;
	text-rendering: optimizeLegibility;
`

export default class Activity extends React.Component {
	componentWillMount() {
		let ghArr = this.props.gh.slice(0, 3)
		let spotifyArr = this.props.spotify.slice(0,3)
		let arr = ghArr.concat(spotifyArr)
		arr.sort((d1, d2) => {
			let dateA = d1.id ? new Date(d1.created_at) : new Date(d1.played_at)
			let dateB = d2.id ? new Date(d2.created_at) : new Date(d2.played_at)
			return dateB - dateA
		})
		this.setState({
			items: arr.slice(0, 3)
		})
	}
	render() {
		return (
			<div>
				{this.state.items.map((item) => {
					if (item.id) {
						if (item.type === 'WatchEvent') {
							return (
								<ListItemWrapper key={item.id}>
									<ListItemLogo>
										<GHLogo />
									</ListItemLogo>
									<ListItemContainer>
										<ListItemText>Starred repository <a href={`https://github.com/${item.repo.name}`}><span>{item.repo.name}</span></a></ListItemText>
										<ListItemText time={true}>
										{formatDistanceStrict(item.created_at, new Date()) + ' ago'}
									</ListItemText>
									</ListItemContainer>
								</ListItemWrapper>
							)
						}
						if (item.type === 'PushEvent') {
							return (
								<ListItemWrapper key={item.id}>
									<ListItemLogo>
										<GHLogo />
									</ListItemLogo>
									<ListItemContainer>
										<ListItemText>Updated <a href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a></ListItemText>
										<ListItemText time={true}>
											{formatDistanceStrict(item.created_at, new Date()) + ' ago'}
										</ListItemText>
									</ListItemContainer>
								</ListItemWrapper>
							)
						}
					} else if (item.track) {
						return (
							<ListItemWrapper key={item.track.id}>
								<ListItemLogo>
									<SpotifyLogo />
								</ListItemLogo>
								<ListItemContainer>
									<ListItemText>
										Listened to {item.track.artists[0].name} - {item.track.name}
									</ListItemText>
									<ListItemText time={true}>
										{formatDistanceStrict(item.played_at, new Date()) + ' ago'}
									</ListItemText>
								</ListItemContainer>
							</ListItemWrapper>
						)
					}
				})}
			</div>
		)
	}
}