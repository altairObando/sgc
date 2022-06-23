import { Layout, Menu } from 'antd'
import React from 'react'
const { Sider } = Layout;
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const CustomSider = ({collapsed, setCollapsed}) => {
  
    return <Sider 
    breakpoint='lg'
    collapsedWidth='4em'
    collapsible
    collapsed={ collapsed }
    onCollapse={( value ) => setCollapsed(value) }
    // trigger={null} TODO:// add separeted sidebar for each component menu
    style={{
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: '4.3em',
        bottom: 0
    }}>
        <Menu 
          theme='dark' //TODO: Update theme colors
          mode='inline'
          defaultSelectedKeys={['1']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}/>
    </Sider>
}

export default CustomSider;