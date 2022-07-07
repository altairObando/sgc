import React from 'react'
import ContactContext from '../../components/contacts/contactContext'
import ContactForm from '../../components/contacts/ContactForm'



const NewContact = ({ initialValues = undefined}) => {
  return <>
  <ContactContext>      
      <ContactForm initialValues={ initialValues }/>
  </ContactContext>
  </>
}

export default NewContact