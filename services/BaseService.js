class BaseService {
    constructor(repository){
        this.repository = new repository();
        this.error = new Error();
        this.error.status = 400;
    }

    async get(id){
        if(!id){
            this.error.message = 'Property Id is required';
            this.error.name    = 'Missing properties';
            throw this.error;
        }
        const entity = await this.repository.get(id);
        if(!entity){
            this.error.message = 'Entity not found';
            throw this.error;
        }
        return entity;
    }
    async getAll(){
        return this.repository.getAll();
    }
    
    async create(entity){
        return await this.repository.create(entity);
    }
    
}

module.exports = BaseService;