import * as React from 'react'
import Layout from '../components/layout'
import Table from 'react-bootstrap/Table';
import { graphql } from 'gatsby'

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
        <tr key={node.id}>
          <td></td>
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
  query {
    allMdx(sort: {frontmatter: {title: ASC}}) {
    nodes {
      frontmatter {
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