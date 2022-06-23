import React from 'react'
import { Layout, Menu }  from 'antd'
const { Header } = Layout;


const items = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));


const CustomHeader = () => {
  return <Header className='header' style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} items={ items } />
  </Header>
}

export default CustomHeader