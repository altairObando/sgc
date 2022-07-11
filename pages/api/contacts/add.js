const ContactService = require("../../../services/ContactsService");
const getContacts = async ( request, response) => {
    const service = new ContactService();
    const { body: contact, method } = request;
    try {
        if(!contact.id || contact.id === '' || contact.id === null){
            const data = await service.create(contact)
            return response.json({ success: data._id ? true: false, data })
        }
        const data = await service.update(contact.id, contact );
        
        return response.json({ success: true, data })
    } catch (error) {
        console.log(error);
        return response.json({ success: false, ...error })
    }
}

module.exports = getContacts;