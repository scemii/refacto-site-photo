import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function photos({ data }) {
    console.log("test", data)
    return (
      <Layout>
      <SEO title="Sydney" />
      <p></p>
      <h1>Sydney - December - 2019</h1>
      {data.sydney.edges.map(({node})=> {
        return (
            <div key={node.id} style={{padding:'1rem', margin:'1rem 0'}}>
            <Img fluid={node.image.fluid} />
            <h3>{node.title}</h3>
          </div>
        )
      })}
      </Layout>
    )
}

export const query = graphql`
{
  sydney:allContentfulSydney {
    edges {
      node {
        id
        title
        image {
          fluid(maxWidth:1080) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
 `