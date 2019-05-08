import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<h1>Learn to design and code React apps</h1>
		<p>
			Complete Courses about the best tools and design systems.
			<br />
			Prototype and build apps with React and Swift.
		</p>
		<Link to="/page-2/">Watch the Video</Link>
	</Layout>
)

export default IndexPage
