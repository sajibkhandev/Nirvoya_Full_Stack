import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  let navigate=useNavigate()

    const onFinish = async(values) => {
    
        let data=await axios.post('http://localhost:8000/api/v1/auth/forgetpassword',{
          email:values.email,
    
        }
        )
        if(data.data.success=="Send email for chanage password"){
          navigate('/login')
          console.log(data);
        }else{
          console.log(data);
          

        }
        // console.log('Success:', values);
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
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
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

export default ForgetPassword
