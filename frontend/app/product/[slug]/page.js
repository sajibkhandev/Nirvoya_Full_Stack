
import React from 'react'
import { Container } from 'react-bootstrap'
async function getData(slug) {
    const res = await fetch(`http://localhost:8000/api/v1/product/singleProduct/${slug}`)
    
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const SingleProduct =async ({params}) => {
    const data = await getData(params.slug)
    // console.log(data);
  return (
   <Container>
     <div>
        {data.map(item=>(
           
           <>
            <h4>{item.name}</h4>
           
            <div dangerouslySetInnerHTML={{ __html: item.discription }}></div>
           
           </>
        ))}
    </div>
   </Container>
  )
}

export default SingleProduct