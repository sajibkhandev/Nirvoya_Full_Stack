import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';

const AddSubCategory = () => {
    const onFinish = async(values) => {
  
  console.log('Success:', values.name);
  let data= await axios.post("http://localhost:8000/api/v1/product/createsubcategory",{
        name:values.name,
        ownerId:userId,
        catId:catId

  })
  console.log(data);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
useEffect(()=>{
  async function allData(){
    let data=await axios.get("http://localhost:8000/api/v1/product/allCategory")
    
    data.data.map(item=>{
      console.log(item);
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