import { IContacto } from "../models/interfaces/IContacto";
import { ContactoRepository } from "../repositories/ContactoRepository";
import { IContactoService } from "./interfaces/IContactoService";

export class ContactoService implements IContactoService {

    private repo: ContactoRepository;

    constructor(){
        this.repo = new ContactoRepository();
    }

    find(item: IContacto, callback: (error: any, result: any) => void): void {
        this.repo.find(item, callback);
    }
    findOne(id: String, callback: (error: any, result: any) => void): void {
        this.repo.findOne(id, callback);
    }
    findAll(callback: (error: any, result: any) => void): void {
        this.repo.findAll(callback);
    }
    async create(item: IContacto): Promise<boolean> {
        return await this.repo.create(item);
    }
    async update(id: String, item: IContacto): Promise<boolean> {
        return await this.repo.update(id, item);
    }
    async delete(id: String): Promise<boolean> {
        return await this.repo.delete(id);
    }

}