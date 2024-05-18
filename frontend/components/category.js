import Link from 'next/link'
import React from 'react'
async function getData() {
    const res = await fetch('http://localhost:8000/api/v1/product/allCategory')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

const Category = async() => {
    const data = await getData()
    console.log(data);
 
  return (
    <div>
        {data.map(item=>(
            <li  className='main'>
              <Link href={`category/${item._id}`}>{item.name}</Link>
             <div className='dropdown'>
             {
                item.subCategoryList.length>0 &&
                item.subCategoryList.map(item2=>(
                  <li>{item2.name}</li>
                ))
              }

             </div>
              
              </li>
        ))}
        
        
    </div>
  )
}

export default Category