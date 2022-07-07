const ContactService = require("../../../services/ContactsService");


const service = new ContactService();
const handler = async(request, response ) => {
    const { query: { contactId: id } } = request;
    try {
        let data = await service.get(id);
        return response.json(data);
    } catch (error) {
        return response.json({ success: false, ...error });
    }
}

module.exports = handler