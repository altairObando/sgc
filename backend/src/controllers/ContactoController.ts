import express from "express";
import { IContacto } from "../models/interfaces/IContacto";
import { ContactoService } from "../services/ContactoService";
import { IBaseController }  from "./interfaces/IBaseController";

export class ContactoController implements IBaseController<ContactoService>{
    
    retrieve(req: express.Request, res: express.Response): void { 
        var service = new ContactoService();
        service.findAll((error, data) => {
            if(error)
                console.log(error);
            res.json(data);
        })
    }

    create (req : express.Request, res : express.Response ): void { 
        try {
            var contacto: IContacto = <IContacto>req.body;
            var service = new ContactoService();
            service.create(contacto)
                .then(saved => {
                    res.json({success: saved, data: contacto })
                })
        } catch (error) {
            console.log("Error: ", error);
        }
    }
    update(req: express.Request, res: express.Response): void {
        var contacto: IContacto = <IContacto>req.body;
        const { id } = req.params;
        new ContactoService().update(id, contacto)
        .then( updated => res.json({ success: updated, data: contacto }))
    }
    delete(req: express.Request, res: express.Response): void {
        const { id } = req.params;
        new ContactoService().delete(id)
        .then(deleted => res.json({ success: deleted, data: id }) )
    }
    
    findById(req: express.Request, res: express.Response): void {
        const { id } = req.params;
        new ContactoService().findOne(id, (error,result) => {
            if(error) res.json({})
            else res.json(result);
        })
    }
    
}