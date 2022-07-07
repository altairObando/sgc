import React from 'react'
import { server } from '../../util/server'
import NewContact from './newContact'
import moment from 'moment'

const ContactDetails = ({ data }) => {
    data['Birthday'] = moment(data['Birthday']);
  return <NewContact initialValues={ data } />
}

export default ContactDetails

export async function getServerSideProps({ query }) {
    const { details: _id } = query;
    const request = await fetch(`${server}/api/contacts/${_id}`);
    try{
        const contact = await request.json()
        return { props: { data: contact } }
    }catch(error){
        console.log(error)
        return { props: { }}
    }
  }