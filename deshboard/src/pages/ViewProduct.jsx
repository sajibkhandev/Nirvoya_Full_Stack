import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios'

const ViewProduct = () => {
    let [allProduct,setAllProduct]=useState("")
    useEffect(()=>{
        async function allData(){
        let data=await axios.get("http://localhost:8000/api/v1/product/allProduct")
        let arr=[]
        
        data.data.map(item=>{
            
          arr.push({
              
            key: item._id,
            name: item.name,
            image:item.image,
            regularprice:item.regularprice,
            sellprice:item.sellprice

        
    
          })
          setAllProduct(arr)
          
        })
    
      }
      allData()
    
    },[])
    const columns = [
        {
            title: 'Serial',
            dataIndex: 'serial',
            key: 'serial',
            render: (item,index,text) => <p>{text+1}</p>,
          },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (_, record) => (
            <Space size="middle">
              <img style={{width:"30px"}} src={`http://localhost:8000${_}`} alt="" />
            </Space>
          ),
        },
        {
          title: 'Regular Price',
          dataIndex: 'regularprice',
          key: 'regularprice',
        },
        {
          title: 'Sell Price',
          key: 'sellprice',
          dataIndex: 'sellprice',
         
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              
              <a>Delete</a>
            </Space>
          ),
        },
      ];
     
  return (
    <Table columns={columns} dataSource={allProduct} />
  )
}

export default ViewProduct