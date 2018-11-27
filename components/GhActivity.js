import * as React from 'react'
import styled from 'styled-components'
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
			items: this.props.gh.slice(0, 3)
		})
	}

	render() {
		return (
			<div>
				{this.state.items.map((item) => {
					if (item.type === 'WatchEvent') {
						return (
							<ListItemWrapper key={item.id}>
								<ListItemLogo>
									<GHLogo />
								</ListItemLogo>
								<ListItemContainer>
									<ListItemText>Starred repository <a href={`https://github.com/${item.repo.name}`}><span>{item.repo.name}</span></a></ListItemText>
									{/* <p>{formatDistanceStrict(item.created_at, new Date()) + ' ago'}</p> */}
								</ListItemContainer>
							</ListItemWrapper>
						)
					}
					if (item.type === 'PushEvent') {
						return (
							<ListItemWrapper key={item.id}>
								<ListItemContainer>
									<ListItemText>Updated <a href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a></ListItemText>
									{/* <p>{formatDistanceStrict(item.created_at, new Date()) + ' ago'}</p> */}
								</ListItemContainer>
							</ListItemWrapper>
						)
					}
					return null
				})}
			</div>
		)
	}
}