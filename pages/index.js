import * as React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Link from 'next/link'
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
			const res = await cachedFetch(GH_URL)
			const res2 = await cachedFetch(SPOTIFY_SONGS)
			const isServerRendered = !!ctx.req

			if (res.message) {
				return { gh: [], spotify: res2, isServerRendered }
			}

			return { gh: res, spotify: res2, isServerRendered }
		} catch (err) {
			console.error("index.js getInitialProps error", err)
			return { spotify: [], gh: [], isServerRendered }
		}
	}

	async componentDidMount() {
		if (this.props.isServerRendered) {
      await overrideCache(GH_URL, this.props.gh)
      await overrideCache(SPOTIFY_SONGS, this.props.spotify)
    }
	}

	render() {
		return (
			<Layout>
				<Header ghactivity={this.props.gh} spotifyActivity={this.props.spotify.items} />
				<Projects projects={projects} />
			</Layout>
		)
	}
}

export default Index