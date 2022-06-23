const BaseService = require('./BaseService');
const ContactoRepository = require('../repositories/ContactoRepository');

/**
 * Abstract class for implementing a model-based repository
 */
class ContactService extends BaseService {
    
    constructor(){
        super(ContactoRepository);
        this._repo = ContactoRepository;
    }
        
}

module.exports = ContactService;