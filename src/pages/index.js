import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/BackgroundSection";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`,`canon`, `photo`, `a1`]} />
    <p></p>
    <h1 style={{color: "white"}}>Canon A1</h1>
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
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default IndexPage
