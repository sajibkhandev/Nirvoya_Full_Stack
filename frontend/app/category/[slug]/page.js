import React from 'react'
async function getData(id) {
  const res = await fetch(`http://localhost:8000/api/v1/product/allSubCategory?slug=${id}`)
  
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Slug = async ({params}) => {
  const data = await getData(params.slug)
  // console.log(data);
  
  return (
    <div>
      {data.map(item=>(
         <li>{item.name}</li>
      ))}
    </div>
  )
}

export default Slug