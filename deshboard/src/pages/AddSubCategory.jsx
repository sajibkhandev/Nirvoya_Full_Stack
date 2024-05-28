import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input,Select  } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AddSubCategory = () => {
  let userId=useSelector(state=>state.currentUser.value.id)
  let [allcategory,setAllcategory]=useState([])
  let [catagoryId,setCategoryId]=useState()
    const onFinish = async(values) => {
  
  console.log('Success:', values.name);
  let data= await axios.post("http://localhost:8000/api/v1/product/createsubcategory",{
        name:values.name,
        ownerId:userId,
        catId:catagoryId
  
  })
  console.log(data);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const onChange = (value) => {
  console.log(`selected ${value}`);
  setCategoryId(value)
};
const onSearch = (value) => {
  console.log('search:', value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

useEffect(()=>{
  async function allData(){
    let data=await axios.get("http://localhost:8000/api/v1/product/allCategory")
    let arr=[]
    
    data.data.map(item=>{
      arr.push({
          
        value: item._id,
        label: item.name,
    

      })
      setAllcategory(arr)
      
    })

  }
  allData()

},[])
  return (
    <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Add Sub Category"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input Sub Category Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
     <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={
      allcategory
    }
  />
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  )
}

export default AddSubCategory