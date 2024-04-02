import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  let navigate=useNavigate()
  const onFinish = async(values) => {
    try {
      let data=await axios.post('http://localhost:8000/api/v1/auth/login',{
      email:"sajibkhan.mern@gmail.com",
      password:"99999999"

    },{
      headers:{
        Authorization: "ertertgrfgvfdf"
      }
    }
    )
    
    if(!data.data.data.isEmailVerified){
      res.send({error:"Please verify your email"})
     
    }else if(data.data.data.role=="user"){
      res.send({error:"You don't have permssion"})
    }else{
       navigate('/home')
      localStorage.setItem("user",JSON.stringify(data.data.data))
      console.log(data);
    }
    } catch (error) {
    }
  
    // console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div>
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
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your email!',
      //   },
      // ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      // rules={[
      //   {
      //     required: true,
      //     message: 'Please input your password!',
      //   },
      // ]}
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
      <br />
      <Link to='/forgetpassword'><h4>Forget Password</h4></Link>
      
    <Link to='/'><h3>Sign Up</h3></Link>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Login