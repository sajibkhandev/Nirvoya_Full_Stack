import React, { useState } from 'react'
import { Button, Checkbox, Form, Input,Select } from 'antd';


const AddDiscount = () => {
    let [couponType,setCouponType]=useState("Fixed")
    console.log(couponType);
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const handleChange = (value) => {
        setCouponType(value);
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
      label="Coupon Name"
      name="couponname"
      rules={[
        {
          required: true,
          message: 'Please input your Coupon Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Coupon Amount"
      name="couponamount"
      rules={[
        {
          required: true,
          message: 'Please input your Coupon Amount!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Coupon Rang"
      name="couponrang"
      rules={[
        {
          required: true,
          message: 'Please input your Coupon Rang!',
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
    <Select
      defaultValue="fixed"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Fixed',
          label: 'fixed',
        },
        {
          value: 'Percent',
          label: 'Percent',
        },
        {
          value: 'Delivery',
          label: 'delivery',
        },
        
      ]}
    />
  </Form>
  )
}

export default AddDiscount