import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Affiliate = () => {
  let [allData,setAllData]=useState([])
  let user=useSelector((state)=>(state.currentUser.value.id))
  console.log(user);
  
  useEffect(()=>{

    async function allProduct(){
      let data=await axios.get("http://localhost:8000/api/v1/product/allProduct")
      setAllData(data.data);

    }
    allProduct()

  },[])
  return (
   <>
   { allData.map(item=>(
      <li style={{borderBottom:"1px solid red",margin:"20px",padding:"10px"}}>{item.name}--------- <Link to={`http://localhost:3000/product/${item.slug}?userId=${user}`}>{`http://localhost:3000/product/${item.slug}?userId=${user}`}</Link></li>
    
    ))}
   </>
  )
}

export default Affiliate