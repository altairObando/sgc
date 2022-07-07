import { Layout } from 'antd'
import React from 'react'
import CustomHeader from './layout/customHeader'
import CustomSider  from './layout/customSider'

const ViewPort = ({ children }) => {

  const [collapsed, setCollapsed] = React.useState(true);
  const [childMargin, setChildMargin ] = React.useState('15em')
  // Update child margin
  React.useEffect(() =>{
    let margin = collapsed ? '3em' : '13em';
    setChildMargin(margin);
  }, [collapsed] )

  const styles = {
    contentStyle : { marginLeft: childMargin , marginTop:'5.5em', padding:'0 2rem', backgroundColor: 'white'}
  }


  return <>
  <Layout className='site-layout' style={{ height: '65em' }}>
      <CustomHeader />
      <Layout style={{ backgroundColor: 'white'}}>
        <CustomSider collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout style={ styles.contentStyle }>
          { children}
        </Layout>
      </Layout>
  </Layout>
  </>
}
export default ViewPort