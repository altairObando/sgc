import React from 'react'
import { FilterOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'

import { server } from '../../util/server';
import ContactList from '../../components/contacts/ContactList'
import CustomPageHeader from '../../components/util/CustomPageHeader'

const MenuActions = [
  <Button key='1' type='primary' icon={ <UserAddOutlined/> }>
    <Link href='/Contacts/newContact'>
      <a style={{ color: 'white'}}>  New Contact</a>
    </Link>
  </Button>,
  <Button key='2' type='primary' icon={ <FilterOutlined/> }>Filter Contacts</Button>,
]

const style = {
  container: { 
    display: 'flex',
    flexDirection: 'column', gap: '25'}
}


const Index = ({ data }) => {
  return (
    <div style={ style.container }>
      <CustomPageHeader title={'Contact List'} extra={ MenuActions } >
        {/* Load Extra components */}
      </CustomPageHeader>
      <ContactList data={data} />
    </div>
  )
}

export async function getServerSideProps(_) {
  const response = await fetch(`${server}/api/Contactos`);
  try {
      const data = await response.json();
      return { props: { data: data } }
  } catch (error) {
    console.log(response);
    return { props: { data: [] }}
  }
}

export default Index