import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


const Home = () => {
    const onClick = (e) => {
    console.log('click ', e);
  };
  const items = [
  getItem('User', 'sub1', <MailOutlined />, [
    getItem('Merchant', 'g1', ),
    getItem('User', 'g2', ),
  ]),
  {
    type: 'divider',
  },
  getItem('Product', 'sub2', <AppstoreOutlined />, [
    getItem('Add Product', '5'),
    getItem('View Product', '6'),
   
  ]),
  {
    type: 'divider',
  },
  getItem('Category and SubCategory', 'sub4', <SettingOutlined />, [
    getItem('Add Category', '9'),
    getItem('Add SubCategory', '10'),
    getItem('View Category', '11'),
    getItem('View SubCategory', '12'),
  ]), 
  {
    type: 'divider',
  },
  getItem('Discount', 'sub5', <SettingOutlined />, [
    getItem('Add Discount', '13'),
   
    getItem('View Discount', '14'),
    
  ]),
 
];
  
  return (
     <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  )
}

export default Home