import { IContacto } from "../models/interfaces/IContacto";
import { BaseRepository } from "./BaseRepository";
import ContactoSchema from '../models/Contacto';

export class ContactoRepository extends BaseRepository<IContacto>{
    constructor() {
        super(ContactoSchema)
    }
}