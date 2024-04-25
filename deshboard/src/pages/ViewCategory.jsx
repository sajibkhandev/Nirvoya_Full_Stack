import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

const ViewCategory = () => {
    let [allcategory,setAllcategory]=useState([])
    const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a> {record.name} Delete</a>
      </Space>
    ),
  },
];
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
   
//   },
  
// ];
useEffect(()=>{
    async function allData(){
    let data=await axios.get("http://localhost:8000/api/v1/product/allCategory")
    let arr=[]
    
    data.data.map(item=>{
      arr.push({
          
        key: item._id,
        name: item.name,
    

      })
      setAllcategory(arr)
      
    })

  }
  allData()

},[])
  return (
    <Table columns={columns} dataSource={allcategory} />
  )
}

export default ViewCategory