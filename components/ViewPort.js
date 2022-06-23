import { Layout } from 'antd'
import React from 'react'
import CustomHeader from './layout/customHeader'
import CustomSider  from './layout/customSider'

const ViewPort = ({ children }) => {

  const [collapsed, setCollapsed] = React.useState(true);
  const [childMargin, setChildMargin ] = React.useState('15em')
  // Update child margin
  React.useEffect(() =>{
    let margin = collapsed ? '2em' : '13em';
    setChildMargin(margin);
  }, [collapsed] )

  return <>
  <Layout>
      <CustomHeader />
      <Layout>
        <CustomSider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout style={{ marginLeft: childMargin , marginTop:'5.5em', padding:'0 2rem'}}>
          { children}
        </Layout>
      </Layout>
  </Layout>
  </>
}

export default ViewPort