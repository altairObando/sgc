import React from 'react'
import { Avatar, Layout, Menu, Space }  from 'antd'
import { AntDesignOutlined } from '@ant-design/icons';
const { Header } = Layout;


const items = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));


const CustomHeader = () => {
  return <Header className='header' style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
    <div className='logo'>
      <Space>
        <Avatar icon={ <AntDesignOutlined /> } />
        <span style={{ color: 'white', backgroundColor: '#001529' }}>SGC - 17025</span>
      </Space>
    </div>
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} items={ items } />
  </Header>
}

export default CustomHeader