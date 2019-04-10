import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"


export default function photos({ data }) {
    console.log("test", data)
    return (
      <Layout>
      <p></p>
      <h1>My pictures...</h1>
      {data.photos.edges.map(({node})=> {
        return (
            <div key={node.id} style={{padding:'1rem', margin:'1rem 0'}}>
            <img src={node.file.url} />
            <h3>{node.title}</h3>
          </div>
        )
      })}
      </Layout>
    )
}

export const query = graphql`
{
  photos: allContentfulAsset {
    edges {
      node {
        id
        title
        file {
          url 
          fileName
          contentType
        }
      }
    }
  }
}
 `