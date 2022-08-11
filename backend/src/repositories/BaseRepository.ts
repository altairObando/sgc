import { Model } from "mongoose"
import { IBaseService } from "../services/common/interfaces/IBaseBusiness"

export abstract class BaseRepository<T> implements IBaseService<T>{    
    private _model: Model<T>

    constructor(schemaModel: Model<T>) {
        this._model = schemaModel;
    }

    async create(item: T): Promise<boolean> {
        try {
            const result = await this._model.create(item);
            return result.isNew;
        } catch(error) {
            console.log(error)
            return false;
        }
    }

    async update(id: String, item: T): Promise<boolean> {
        try {
            var updatedModel = await this._model.findByIdAndUpdate(id, item);
            return updatedModel?.errors?.message ? false : true;
        } catch (error) {
            console.log(error)
            return false
        }
    }

    async delete(id: String): Promise<boolean> {
        try{
            await this._model.findByIdAndDelete(id);
            return true;
        }catch{
            return false;
        }
    }

    find(item: any, callback: (error: any, result: any) => void): void {
        this._model.find( {...item}, callback);
    }

    findOne(id: String, callback: (error: any, result: any) => void): void {
        this._model.findById(id, callback);
    }

    async findAll(callback: (error: any, result: any) => void): Promise<void> {
        var todo  = await this._model.find();        
        callback([], todo);
    }
}