import React from 'react'
import { Space, Tabs, Button } from 'antd'
import { AccountBookOutlined, ApartmentOutlined, RestOutlined, SaveOutlined } from '@ant-design/icons'
import CustomPageHeader from '../../components/util/CustomPageHeader'
import BasicInfo from './BasicInfo';
import { Context } from './contactContext';
const { TabPane } = Tabs;


const ContactForm = ({ initialValues }) => {
  
  const [ context, updateContext ] = React.useContext(Context);

  const onSubmitForm = async () => {
    const frm = ( context.formBasicInfo || window.formBasicInfo );
    if(!frm){
      throw 'No form reference defined'
    }

    const values = frm.getFieldsValue();
    const request = await fetch('/api/contacts/add', { method: 'POST', body: JSON.stringify(values), headers: { 'Content-Type': 'application/json'} });
    const response = await request.json();
    console.log(response);
  }

  const Actions = [
    <Button key='1' icon={ <SaveOutlined /> } onClick={ onSubmitForm }> Save Changes</Button>,
    <Button key='2' icon={ <RestOutlined /> } onClick={ () => { }}>Reset Form </Button>,

  ]
  React.useEffect( () => {
    updateContext({...context, 'initialValues': initialValues })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  return <>
      <CustomPageHeader title={ 'New Contact' } extra={ Actions }/>
      <Tabs>
        <TabPane tab={ <Space> <AccountBookOutlined /> General Information</Space> } key='1'>
          <BasicInfo />
        </TabPane>
        <TabPane tab={ <Space> <ApartmentOutlined /> Address Information </Space> } key='2'>
        </TabPane>
    </Tabs>
    </>
}

export default ContactForm