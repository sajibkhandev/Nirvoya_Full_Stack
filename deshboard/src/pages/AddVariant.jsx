import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input,Select  } from 'antd';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios'

const AddVariant = () => {
    let [image, setImage] = useState({})
    let [allProduct, setAllProduct] = useState([])
    let [productId, setProductId] = useState("")
    const onChange = (value) => {
        setProductId(value);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };
      const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const onFinish = async (values) => {
        let data = await axios.post("http://localhost:8000/api/v1/product/createproduct", {
          name: values.name,
          avatar: image,
          regularprice:values.regularprice,
          sellprice:values.sellprice,
          productid:productId
    
        },
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        console.log(data);
    
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      let handleImage = (e) => {
        setImage(e.target.files[0]);
    
      }
      useEffect(()=>{
        async function allData(){
            let data=await axios.get("http://localhost:8000/api/v1/product/allProduct")
            let arr=[]
            data.data.map(item=>{
                arr.push({
                    value: item._id,
                    label: item.name
                })
                
            })
            setAllProduct(arr)
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
      label="Variant Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your Variant Name!',
        },
      ]}
    >
      <Input  />
    </Form.Item>
  

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
      <Input onChange={handleImage} type='file' />
    </Form.Item>
    <Form.Item
      label="Regular Price"
      name="regularprice"
      rules={[
        {
          required: true,
          message: 'Please input your Regular Price!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Sell Price"
      name="sellprice"
      rules={[
        {
          required: true,
          message: 'Please input your Sell Price!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={allProduct}
  />
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

export default AddVariant