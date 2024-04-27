import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'

const AddProduct = () => {
    let [discription,setDiscription]=useState()
    let [image,setImage]=useState({})
    const onFinish = async(values) => {

      let data=await axios.post("http://localhost:8000/api/v1/product/createproduct",{
        name:values.name,
        discription:discription,
        avatar:image

      },
      {
        headers:{
          "Content-Type":"multipart/form-data"
        }
      }
    )
  console.log(data);
 
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
let handleImage=(e)=>{
  setImage(e.target.files[0]);

}
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
    <CKEditor
                editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event,editor ) => {
                        setDiscription(editor.getData())
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                />


    <Form.Item
      label="Image"
      name="image"
      rules={[
        {
          required: true,
          message: 'Please input your Product Image!',
        },
      ]}
    >
      <Input onChange={handleImage} type='file'/>
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