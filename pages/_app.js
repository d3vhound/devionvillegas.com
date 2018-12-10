import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
const projectFileNames =
  preval`
module.exports = require("fs").readdirSync("./pages/projects")
` || []
const projects = projectFileNames.map(name => {
  const {
    default: Component,
    meta: { path, id, title, media_url, placeholder_path, type, next_project }
  } = require("./projects/" + name)

  return {
		path,
		Component,
		id,
		title,
		name,
		media_url,
		placeholder_path,
		type,
		next_project
  }
})

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				<Layout>
					<Component
						{...pageProps}
					/>
					<Projects 
						projects={this.props.router.pathname === "/" ? projects : []} 
						pathname={this.props.router.pathname}
					/>
				</Layout>
			</Container>
		)
	}
}
