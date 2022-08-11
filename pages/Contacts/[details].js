import React from 'react'
import { server } from '../../util/server'
import NewContact from './newContact'
import moment from 'moment'

const ContactDetails = ({ data }) => {
  if(data['Birthday'] && data['Birthday'])
    data['Birthday'] = moment(data['Birthday']);
  return <NewContact initialValues={ data } />
}

export default ContactDetails

export async function getServerSideProps({ query }) {
    const { details: _id } = query;
    const request = await fetch(`${server}/api/Contactos/${_id}`);
    try{
        const contact = await request.json()
        console.log(contact)
        return { props: { data: contact } }
    }catch(error){
        console.log(error)
        return { props: { }}
    }
}