import connection from '../util/connectMongoose';

class BaseRepository {
    constructor(model){
        this.model = model;
        this.connectionOpen = false;
    }
    async connectBd() {
        await connection();
        this.connectionOpen = true;
    }
    async get(id){
        if(!this.connectionOpen)
            await this.connectBd();
        return await this.model.findById(id);
    }
    async getAll(){
        try {
            if(!this.connectionOpen)
                await this.connectBd();            
            return await this.model.find();
        } catch (error) {
            throw error
        }
    }
    async create(entity){
        if(!this.connectionOpen)
            await this.connectBd();
        return await this.model.create(entity);
    }
    async update(id, entity){
        if(!this.connectionOpen)
            await this.connectBd();
        return await this.model.findByIdAndUpdate(id, entity, { new: true });
    }
    async delete(id){
        if(!this.connectionOpen)
            await this.connectBd();
        await this.model.findByIdAndDelete(id);
        return true;
    }
}

module.exports = BaseRepository;