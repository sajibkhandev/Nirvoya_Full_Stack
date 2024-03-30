import { Button, Form, Input } from 'antd';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const OtpRegistration = () => {
    const navigate=useNavigate()
    const param=useParams()
    console.log(param.email);
     const onFinish = async(values) => {
    let data=await axios.post('http://localhost:8000/api/v1/auth/otp',{
        
      email:param.email,
      otp:values.otp
    }
    )
    if(data.data.success=="Email Verified"){
        navigate("/login")
    }
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
      label="Otp"
      name="otp"
      rules={[
        {
          required: true,
          message: 'Please input your otp!',
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

export default OtpRegistration