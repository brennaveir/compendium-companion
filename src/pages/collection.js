import * as React from 'react'
import Layout from '../components/layout'
import Table from 'react-bootstrap/Table';
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Collection = ({ data }) => {
    return (
        <>
        <Layout pageTitle="Collection">
     {
      data.allMdx.nodes.map((node) => (
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>pic here</th>
          <th>Outfit Piece</th>
          <th>Upgrade 1</th>
          <th>Upgrade 2</th>
          <th>Upgrade 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><GatsbyImage
      image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
      alt={node.frontmatter.hero_image_alt}
    /></td>
          <td>{node.frontmatter.title}</td>
          <td>{node.excerpt}</td>
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </Table> 
      ))
     }     
          
  
            
          
        </Layout>
        </>
    )
}

export const query = graphql`
query  {
  allMdx {
    nodes {
      frontmatter {
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
      }
      id
      excerpt
    }
  }
}
`
export const Head = () => <title>Collection</title>

export default Collection