import React from 'react'
import { Space, Tabs, Button, message } from 'antd'
import { AccountBookOutlined, ApartmentOutlined, RestOutlined, SaveOutlined } from '@ant-design/icons'
import CustomPageHeader from '../../components/util/CustomPageHeader'
import BasicInfo from './BasicInfo';
import { Context } from './contactContext';
import { server } from '../../util/server';
import { SaveEntity, UpdateEntity } from '../../util/request';
const { TabPane } = Tabs;


const ContactForm = ({ initialValues }) => {
  
  const [ context, updateContext ] = React.useContext(Context);
  const [ contactName, setContactName ] =React.useState('New Contact');

  const onSubmitForm = async () => {
    const frm = ( context.formBasicInfo || window.formBasicInfo );
    if(!frm){
      throw 'No form reference defined'
    }    
    const values = frm.getFieldsValue();
    const { _id : id } = initialValues || {};
    try {
      values['id'] = id;
      const response = id && id != null ? await UpdateEntity('Contactos/', values, id) : await SaveEntity('Contactos/', values);
      if(response.success)
        message.success('Action Completed')
    } catch (error) {
      message.error(JSON.stringify(error))
    }
  }

  const ClearForm = () => {
    const frm = ( context.formBasicInfo || window.formBasicInfo );
    frm.resetFields();
  }
  
  const Actions = [
    <Button key='1' icon={ <SaveOutlined /> } onClick={ onSubmitForm } type='primary'> Save Changes</Button>,
    <Button key='2' icon={ <RestOutlined /> } onClick={ ClearForm }>Reset Form </Button>,
  ]

  React.useEffect( () => {
    updateContext({...context, 'initialValues': initialValues })
    if(initialValues && initialValues != null && initialValues.FirstName && initialValues.FirstName != null)
      setContactName(`${initialValues.FirstName} ${initialValues.MiddleName} ${initialValues.Surname1}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues])

  return <>
      <CustomPageHeader title={ contactName } extra={ Actions }/>
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