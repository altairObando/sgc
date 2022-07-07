import { Layout, Menu } from 'antd'
import React from 'react'
const { Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import Link from 'next/link';

const menuItems = [
  { icon: <UserOutlined />, key: 'nav-1', label: <Link href='/Contacts'><a> Contacts</a></Link>},
  { icon: <VideoCameraOutlined/>, key: 'nav-2', label: 'Undefined'},
  { icon: <UploadOutlined/>, key: 'nav-3', label: 'Undefined'},
]


const CustomSider = ({collapsed, setCollapsed}) => {
  
    return <Sider 
    breakpoint='lg'
    collapsedWidth='4em'
    collapsible
    collapsed={ collapsed }
    onCollapse={( value ) => setCollapsed(value) }
    //TODO: add separeted sidebar for each component menu
    // trigger={null} 
    style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: '4.3em',
        bottom: 0
    }}>
        <Menu 
          //TODO: Update theme colors
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['nav-1']}
          items={ menuItems }/>
    </Sider>
}

export default CustomSider;