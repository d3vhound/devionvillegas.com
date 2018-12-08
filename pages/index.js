import * as React from 'react'
import Header from '../components/Header'
import Projects from '../components/Projects'
import cachedFetch, { overrideCache } from '../lib/cached-json-fetch'
import '../assets/styles.scss'
const projectFileNames =
  preval`
module.exports = require("fs").readdirSync("./pages/projects")
` || []

const GH_URL = 'https://api.github.com/users/d3vhound/events'
const SPOTIFY_SONGS = 'https://devionvillegas.com/spotify/'

const projects = projectFileNames.map(name => {
  const {
    default: Component,
    meta: { title, media_url }
  } = require("./projects/" + name)

  return {
    Component,
		title,
		name,
		media_url
  }
})

class Index extends React.Component {
	static async getInitialProps(ctx) {
		try {
			const res = await cachedFetch(SPOTIFY_SONGS)
			const isServerRendered = !!ctx.req

			return { gh: [], spotify: res, isServerRendered }
		} catch (err) {
			console.error("index.js getInitialProps error", err)
			return { spotify: [], gh: [] }
		}
	}

	async componentDidMount() {
		if (this.props.isServerRendered) {
      await overrideCache(SPOTIFY_SONGS, this.props.spotify)
    }
	}

	render() {
		return (
			<div>
				<Header ghactivity={this.props.gh} spotifyActivity={this.props.spotify.items} />
				<Projects projects={projects} />
			</div>
		)
	}
}

export default Index