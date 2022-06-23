import contactos from '../models/Contacts';
import BaseRepository from './BaseRepository';

class ContactoRepository extends BaseRepository {
     constructor(){
         super(contactos);
         this._contactos = contactos;
     }

     async GetContacts(filter){
         const result = await this.model.find({ ...filter })
         return result;
     }
}

module.exports = ContactoRepository;