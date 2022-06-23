/**
 * Allows to evaluate in a request if the value of the id is valid
 * @param {String} id Document Identifier
 * @param {Object} error Instance of error repository
 * @returns {Boolean} True if is valid id
 */
const validateId = (id, error) =>{
    if(!id){
        error.message = 'Property Id is required';
        error.name    = 'Missing properties';
        throw error;
    }
    return true;
}

/**
 * Validate that the is not an empty model instance
 * @param {Object} entity Model Object
 * @param {Object} error Instance of error in repository
 * @returns {Boolean}
 */
const validateEntity = (entity, error ) => {
    if(!entity || entity == null || Object.keys(entity).length <= 0){
        error.message = 'Can\'t store empty values';
        error.status = 400;
        throw error;
    }
    return true;
}

/**
 * This class allows the basic operations of a repository (CRUD)
 */
class BaseService {
    constructor(repository){
        this.repository = new repository();
        this.error = new Error();
        this.error.status = 400;
    }

    /**
     * Get Model record by id
     * @param {String} id identificador de documento
     * @returns instancia del modelo
     */
    async get(id){
        validateId(id, this.error);
        const entity = await this.repository.get(id);
        if(!entity){
            this.error.message = 'Entity not found';
            throw this.error;
        }
        return entity;
    }

    /**
     * Get all records in a schema
     * @returns Array List with all records in schema
     */
    async getAll(){
        return this.repository.getAll();
    }

    /**
     * Stores a new record at the database level.
     * @param {Object} entity Object with model values
     * @returns new Record 
     */
    async create(entity){
        try {
            validateEntity(entity, this.error);
            return await this.repository.create(entity);    
        } catch (error) {
            throw error;
        }
        
    }

    /**
     * Allos update differents records
     * @param {String} id Document identififer
     * @param {Object} entity Entity values
     * @returns a record updated
     */
    async update(id, entity){
        try {
            if(validateId(id, this.error) && validateEntity(entity, this.error)){
                return await this.repository.update(id, entity);
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Remove a record
     * @param {String} id Document Identifier
     * @returns True when a record is deleted succesfully
     */
    async delete(id){
        try {
            if(validateId(id, this.error)){
                await this.repository.delete(id);
                return true;
            }
        } catch (error) {
            throw error;
        }
    }    
}

module.exports = BaseService;