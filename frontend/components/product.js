import React from 'react'
import Image from 'next/image'
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
            {data.map(item => (
                <>
                    <li>{item.name}</li>
                    <li>
                        <Image
                            src={`http://localhost:8000${item.image}`}
                            width={250}
                            height={250}
                            alt="Picture of the author"
                        />
                    </li>
                    <li>{item.regularprice?<span><del><span>{item.regularprice}</span></del> <span>{item.sellprice}</span></span>:<span>{item.sellprice}</span>}</li>
                </>
            ))}
        </div>
    )
}

export default Product