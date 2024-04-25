import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';

const AddProduct = () => {
    const onFinish = (values) => {
  console.log('Success:', values);
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
      label="Product Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your Product Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>


<Form.Item
      label="Image"
      name="image"
      rules={[
        {
          required: true,
          message: 'Please input your Product Name!',
        },
      ]}
    >
      <Input type='file'/>
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

export default AddProduct