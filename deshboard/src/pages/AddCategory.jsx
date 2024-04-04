import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';

const AddCategory = () => {
  let userId=useSelector(state=>state.currentUser.value.id)
 
    const onFinish = async (values) => {

  console.log('Success:', values.name);
  let data= await axios.post("http://localhost:8000/api/v1/product/createcategory",{
        name:values.name,
        ownerId:userId

  })
  console.log(data);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
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
      label="Category Name:"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input Category Name!',
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

export default AddCategory