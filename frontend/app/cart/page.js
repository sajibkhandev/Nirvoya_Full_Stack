"use client"
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Image from 'next/image'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allCart')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
const Cart = async () => {
    const data = await getData()
    let total=0
    data.map(item=>{
        total+=item.productId.sellprice ? item.productId.sellprice * item.quantity : item.productId.regularprice * item.quantity
    })
    console.log();

    let handleIncrement = async(id,type) => {
        // console.log(id);
        const rawResponse = await fetch(`http://localhost:8000/api/v1/product/cart?type=${type}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productId:id,
            })
        });
        const content = await rawResponse.json();
        console.log(content);

    }
    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Sub Total</th>
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
                            <td>{item.productId.name.substring(0, 50)}</td>
                            <td>
                                <button onClick={() => handleIncrement(item.productId._id,"increment")}>+</button>
                                {item.quantity}
                                <button onClick={() => handleIncrement(item.productId._id,"decrement")}>-</button>
                            </td>
                            <td>{item.productId.sellprice ? item.productId.sellprice : item.productId.regularprice}</td>
                            <td>{item.productId.sellprice ? item.productId.sellprice * item.quantity : item.productId.regularprice * item.quantity}</td>
                        </tr>

                    ))}


                </tbody>
            </Table>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Price</th>
          <th>Tax(15%)</th>
          <th>Delivery</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{total}</td>
          <td>{total*15/100}</td>
          <td>50</td>
          <td>{total+(total*15/100)+50}</td>
        </tr>
        
      </tbody>
    </Table>
    <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
        </Container>

    )
}

export default Cart