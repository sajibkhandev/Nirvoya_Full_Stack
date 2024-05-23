import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './productCard';



async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allProduct')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
const Product = async () => {
    const data = await getData()
    return (
        <div>
           
            <Container className='mt-5'>
                <Row className="justify-content-md-center">
                    {data.map(item=>(
                        <Col xs lg="3">
                        <ProductCard item={item}/>
                        </Col>

                    ))}
                    
                </Row>
            </Container>
        </div>
    )
}

export default Product