import * as React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Projects from '../components/Projects'
import cachedFetch, { overrideCache } from '../lib/cached-json-fetch'
import '../assets/styles.scss'
// const projectFileNames =
//   preval`
// module.exports = require("fs").readdirSync("./pages/projects")
// ` || []

// const GH_URL = 'https://api.github.com/users/d3vhound/events'
// const SPOTIFY_SONGS = 'https://devionvillegas.com/spotify/'

// const projects = projectFileNames.map(name => {
//   const {
//     default: Component,
//     meta: { title, media_url, placeholder_path, type, next_project }
//   } = require("./projects/" + name)

//   return {
//     Component,
// 		title,
// 		name,
// 		media_url,
// 		placeholder_path,
// 		type,
// 		next_project
//   }
// })

class Index extends React.Component {	
	// static async getInitialProps(ctx) {
	// 	try {
	// 		const res = await cachedFetch(SPOTIFY_SONGS)
	// 		const isServerRendered = !!ctx.req

	// 		return { gh: [], spotify: res, isServerRendered }
	// 	} catch (err) {
	// 		console.error("index.js getInitialProps error", err)
	// 		return { spotify: [], gh: [] }
	// 	}
	// }

	// async componentDidMount() {
	// 	if (this.props.isServerRendered) {
  //     await overrideCache(SPOTIFY_SONGS, this.props.spotify)
	// 	}
	// }

	render() {
		return (
			<div>
				<Head>
					<title>Devion Villegas - Software Developer</title>
					<meta name="description" content="Devion Villegas is a software developer 	helping enterprise and startup organizations build web applications, 	PWAs,mobile apps, and cloud infrastructure." />
				</Head>
				<Header />
				{/* <Projects projects={projects} /> */}
			</div>
		)
	}
}

export default Index