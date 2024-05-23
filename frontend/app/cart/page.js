import React from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'

async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allCart')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
const Cart = async () => {
    const data = await getData()
    console.log(data);
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
                    {data.map(item => (
                        <tr>
                            <td>
                                <Image
                                    src={`http://localhost:8000${item.productId.image}`}
                                    width={50}
                                    height={50}
                                    alt="Picture of the author"
                                />
                            </td>
                            <td>{item.productId.name.substring(0,50)}</td>
                            <td>
                                <button>+</button>
                                {item.quantity}
                                <button>-</button>
                            </td>
                            <td>{item.productId.sellprice?item.productId.sellprice:item.productId.regularprice}</td>
                            <td>{item.productId.sellprice?item.productId.sellprice*item.quantity:item.productId.regularprice*item.quantity}</td>
                        </tr>

                    ))}


                </tbody>
            </Table>
        </Container>

    )
}

export default Cart