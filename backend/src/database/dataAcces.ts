import mongoose  from 'mongoose'

class DataAccess {
    static mongooseInstance: any;
    static mongooseConection: mongoose.Connection;

    constructor(){
        DataAccess.connect();
    }

    static connect(): mongoose.Connection{
        if(this.mongooseInstance) return this.mongooseInstance;
        this.mongooseConection = mongoose.connection;
        this.mongooseConection.once("open", () => {
            console.log("🚀 conectado a db  ")
        });

        this.mongooseInstance = mongoose.connect(`${process.env.DATABASE}`);

        return this.mongooseInstance;
    }

}

DataAccess.connect();
export = DataAccess