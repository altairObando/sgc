export interface IWriteable<T>{
    create(item :T): Promise<boolean>;
    update(id :String, item :T): Promise<boolean>;
    delete(id :String): Promise<boolean>;
}