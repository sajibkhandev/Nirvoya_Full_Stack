import { Button, Form, Input } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
     const onFinish = async(values) => {

    let data=await axios.post('http://localhost:8000/api/v1/auth/registration',{
      username:values.username,
      email:values.email,
      password:values.password

    },{
      headers:{
        Authorization: "ertertgrfgvfdf"
      }
    }
    )
    console.log(data);
    
  console.log('Success:', values);
  navigate(`/otp/${values.email}`)
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
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

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
      label="Password"
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

export default Home