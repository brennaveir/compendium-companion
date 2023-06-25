import * as React from 'react'
import Layout from '../components/layout'
import Table from 'react-bootstrap/Table';

const Collection = () => {
    return (
        <>
        <Layout pageTitle="Collection">
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Outfit Piece</th>
          <th>Upgrade 1</th>
          <th>Upgrade 2</th>
          <th>Upgrade 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </Table>
        </Layout>
        </>
    )
}

export const Head = () => <title>Collection</title>

export default Collection