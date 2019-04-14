import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"


export default function photos({ data }) {
    console.log("test", data)
    return (
      <Layout>
       <SEO title="Grenelle" />
      <p></p>
      <h1>My pictures...</h1>
      {data.grenelle.edges.map(({node})=> {
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
  grenelle:allContentfulGrenelle {
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