const ContactService = require("../../../services/ContactsService");
const getContacts = async ( request, response) => {
    const service = new ContactService();
    const { body: contact } = request;
    try {
        const data = await service.create(contact)
        return response.json({ success: data._id ? true: false, data })
    } catch (error) {
        console.log(error);
        return response.json({ success: false, ...error })
    }
}

module.exports = getContacts;