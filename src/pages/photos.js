import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo"


const photos = ({data}) => (
    <Layout>
     <SEO title="Photos Index" />
    <p></p>
      <div className="row">
        <div className="card text-white bg-dark mb-3" style={{width: "18rem"}}>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} className="card-img-top"  alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Sydney Australia</h5>
            <p className="card-text">
              Couples of snapshots done in Sydney during December 2019.
            </p>
            <a href="/sydney" className="btn btn-light">
              See pictures..
            </a>
          </div>
        </div>
        <div className="card text-white bg-dark mb-3" style={{width: "18rem"}}>
        <Img fluid={data.placeholderImage2.childImageSharp.fluid} className="card-img-top"  alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Paris Grenelle</h5>
            <p className="card-text">
              Snaps of Beaugrenelle disctrict - Paris 15 in winter 2018.
            </p>
            <a href="/grenelle" className="btn btn-light">
              See pictures..
            </a>
          </div>
        </div>
        <div className="card text-white bg-dark mb-3" style={{width: "18rem"}}>
        <Img fluid={data.placeholderImage3.childImageSharp.fluid} className="card-img-top"  alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Gaming Consoles</h5>
            <p className="card-text">
              Shots of random consoles from my youth done with macro lens: 70-210.
            </p>
            <a href="/consoles" className="btn btn-light">
              See pictures..
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )

export const query = graphql`
query {
  placeholderImage: 
   file(relativePath: { eq: "sydney.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  placeholderImage2: 
   file(relativePath: { eq: "tour.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1080) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  placeholderImage3: 
  file(relativePath: { eq: "n64.jpg" }) {
   childImageSharp {
     fluid(maxWidth: 1080) {
       ...GatsbyImageSharpFluid
     }
   }
 }
}
`;

  export default photos;
