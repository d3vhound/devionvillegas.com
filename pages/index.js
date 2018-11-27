import * as React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import 'isomorphic-unfetch'
import '../assets/styles.scss'

class Index extends React.Component {
	static async getInitialProps({ req }) {
		try {
			const res = await fetch('https://api.github.com/users/d3vhound/events')
			const res2 = await fetch('https://devionvillegas.com/spotify/')
			const json = await res.json()
			const json2 = await res2.json()
			console.log(res)
			return { gh: json, spotify: json2.items }
		} catch (err) {
			console.error(err)
		}
	}

	render() {
		return (
			<Layout>
				<Header ghactivity={this.props.gh} spotifyActivity={this.props.spotify} />
			</Layout>
		)
	}
}

export default Index