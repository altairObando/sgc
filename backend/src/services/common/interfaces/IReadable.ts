export interface IReadable<T>{
    find(item: T, callback: (error: any, result: any) => void): void;
    findOne(id: String, callback: (error: any, result: any) => void): void;
    findAll(callback : (error : any, result: any) => void ): void
}