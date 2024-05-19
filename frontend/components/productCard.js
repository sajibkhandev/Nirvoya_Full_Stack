"use client"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({item}) => {
  console.log(item);
  return (
    <Card className='mt-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:8000${item.image}`} />
      <Card.Body>
        <Card.Title>{item.name.substring(0,65)}</Card.Title>
        
          
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard