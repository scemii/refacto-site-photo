import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"


export default function photos({ data }) {
    console.log("test", data)
    return (
      <Layout>
      <p></p>
      <h1>All my consoles</h1>
      {data.consoles.edges.map(({node})=> {
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
  consoles:allContentfulConsoles {
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