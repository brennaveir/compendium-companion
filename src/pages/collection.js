import * as React from 'react'
import Layout from '../components/layout'
import Table from 'react-bootstrap/Table';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


const Collection = ({ data }) => {
    return (
        <>
        <Layout pageTitle="Collection">
     {
      data.allMdx.nodes.map((node) => (
    //    <Table striped bordered hover>
    //   <thead>
    //     <tr>
    //       <th>pic here</th>
    //       <th>Outfit Piece</th>
    //       <th>Upgrade 1</th>
    //       <th>Upgrade 2</th>
    //       <th>Upgrade 3</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td><GatsbyImage
    //   image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
    //   alt={node.frontmatter.hero_image_alt}
    // /></td>
    //       <td>{node.frontmatter.title}</td>
    //       <td>{node.excerpt}</td>
    //       <td></td>
    //       <td></td>
    //     </tr>

    //   </tbody>
    // </Table> 
<Card style={{ width: '20rem' }}>

      <GatsbyImage variant="top" className='outfitImg' image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData} thumbnail />
   
      <Card.Body>
        <Card.Title>{node.frontmatter.title}</Card.Title>
        <Card.Text>
        {node.excerpt}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
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