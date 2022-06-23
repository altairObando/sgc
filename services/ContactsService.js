const BaseService = require('./BaseService');
const ContactoRepository = require('../repositories/ContactoRepository');

class ContactService extends BaseService {
    constructor(){
        super(ContactoRepository);
        this._repo = ContactoRepository;
    }
    async GetContactById(id){
        try {
            return await this.get(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContactService;