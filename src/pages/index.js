import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import BackgroundSection from "../components/BackgroundSection";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`,`canon`, `photo`, `a1`]} />
    <p></p>
    <h1>Canon A1</h1>
    <p></p>
    <BackgroundSection
      img={data.placeholderImage.childImageSharp.fluid}
      title=""
    />
  </Layout>
)

export const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "a1_3.png" }) {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

export default IndexPage
