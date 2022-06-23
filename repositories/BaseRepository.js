import connection from '../util/connectMongoose';
/**
 * Abstract class for implementing a model-based repository
 */
class BaseRepository {
    constructor(model){
        this.model = model;
        this.connectionOpen = false;
    }
    /**
     * Open a mongoose connection
     */
    async connectBd() {
        await connection();
        this.connectionOpen = true;
    }
    /** Get a record by id */
    async get(id){
        if(!this.connectionOpen)
            await this.connectBd();
        return await this.model.findById(id);
    }
    /** Get all records */
    async getAll(){
        try {
            if(!this.connectionOpen)
                await this.connectBd();            
            return await this.model.find();
        } catch (error) {
            throw error
        }
    }
    /** Create a new Record */
    async create(entity){
        if(!this.connectionOpen)
            await this.connectBd();
        return await this.model.create(entity);
    }
    /** Update a record by id */
    async update(id, entity){
        if(!this.connectionOpen)
            await this.connectBd();
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }
    /** Remove a record from db */
    async delete(id){
        if(!this.connectionOpen)
            await this.connectBd();
        await this.model.findByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseRepository;