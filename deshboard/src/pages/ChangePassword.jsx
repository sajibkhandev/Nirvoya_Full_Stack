import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const ChangePassword = () => {
  const navigate=useNavigate()
const parem =useParams()
    const onFinish = async(values) => {
        let data=await axios.post('http://localhost:8000/api/v1/auth/changepassword',{
          token:parem.token,
          password:values.password
        }
        )
        console.log(data);
        if(data.data.success=="Password has changed"){
          navigate('/login')

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
      label="New Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
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

export default ChangePassword
