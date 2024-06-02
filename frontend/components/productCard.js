"use client"
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = ({item}) => {
  let handleCart= async(item)=>{
    const rawResponse = await fetch('http://localhost:8000/api/v1/product/cart', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      productId:item._id,
      quantity:1,
      cartOwnerId:"6645ff1f3504cf890f74dec4"
    })
  });
  const content = await rawResponse.json();
  console.log(content);
    
  }
  // console.log(item);
  return (
    <Card className='mt-4' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`http://localhost:8000${item.image}`} />
      <Card.Body>
        <Card.Title><Link href={`/product/${item.slug.split(" ").join("-")}`}>{item.name.substring(0,65)}</Link></Card.Title>
        
          
        <p>{item.sellprice?<span><del>{item.regularprice}</del>--{item.sellprice}</span>:<span>{item.regularprice}</span>}</p>
        
        <Button onClick={()=>handleCart(item)}  variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard