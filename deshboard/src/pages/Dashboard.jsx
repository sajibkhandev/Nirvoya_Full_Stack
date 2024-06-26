import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Col, Row } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const Dashboard = () => {
  let navigate=useNavigate()
  let user=JSON.parse(localStorage.getItem("user"))
 
    const onClick = (e) => {
    console.log('click ', e.key);
    navigate(e.key)
  };
  const items = [
    user.role =="admin" &&
  getItem('User', 'sub1', <MailOutlined />, [
    getItem('Merchant', 'g1', ),
    getItem('User', 'g2', ),
  ]),
  {
    type: 'divider',
  },
  getItem('Product', 'sub2', <AppstoreOutlined />, [
    getItem('Add Product', '/dashboard/product'),
    getItem('View Product', '/dashboard/viewproduct'),
    getItem('Add Variant', '/dashboard/variant'),
    getItem('View Variant', '/dashboard/'),
   
  ]),
  {
    type: 'divider',
  },
  getItem('Category and SubCategory', 'sub4', <SettingOutlined />, [
    getItem('Add Category', '/dashboard/category'),
    getItem('Add SubCategory', '/dashboard/subcategory'),
    getItem('View Category', '/dashboard/viewcategory'),
    getItem('View SubCategory', '12'),
  ]), 
  {
    type: 'divider',
  },
  getItem('Discount', 'sub5', <SettingOutlined />, [
    getItem('Add Discount', '/dashboard/adddiscount'),
   
    getItem('View Discount', '14'),
    
  ]),
  {
    type: 'divider',
  },
  getItem('Affiliate', 'sub6', <SettingOutlined />, [
    getItem('Product List', '/dashboard/affiliate'),
   
    
    
  ]),
 
];
  
  return (
    <Row>
      <Col span={4}> <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </Col>
      <Col span={20}>
        <Outlet/>
      </Col>
    </Row>
    
  )
}

export default Dashboard