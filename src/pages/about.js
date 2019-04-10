import React from "react"
import { Link } from "gatsby"
import BackgroundSection from "../components/BackgroundSection";
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <p></p>
    <h2>About me...</h2>
    <p>Welcome to my website exposing snaps done only with Canon A1</p>
    <BackgroundSection
      img={data.placeholderImage.childImageSharp.fluid}
      title=""
    />
  </Layout>
)


export const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "a1_2.png" }) {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`;

export default SecondPage
