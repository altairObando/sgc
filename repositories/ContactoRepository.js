import contactos      from '../models/Contacts';
import BaseRepository from './BaseRepository';

class ContactoRepository extends BaseRepository {
     constructor(){
         super(contactos);
         this._contactos = contactos;
     }
}

module.exports = ContactoRepository;