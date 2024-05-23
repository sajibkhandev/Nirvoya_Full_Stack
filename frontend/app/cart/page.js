import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


const Cart = () => {
  return (
    <Container>
        <Table striped bordered hover>
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Unit Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
     
    </tbody>
  </Table>
    </Container>
    
  )
}

export default Cart