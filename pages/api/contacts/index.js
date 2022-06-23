const ContactService = require("../../../services/ContactsService");
const getContacts = async ( request, response) => {    
    const service = new ContactService();
    try {
        const data = await service.getAll();
        return response.json({ success: true , contacts: data })
    } catch (error) {
        console.log(error);
        return response.json({ success: false, ...error })
    }
}

module.exports = getContacts;