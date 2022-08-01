import {Model, Schema } from 'mongoose';
import DataAccess from '../database/dataAcces';
import { IContacto } from './interfaces/IContacto';

var mongooseConnection = DataAccess.mongooseConection;


const contactSchema: Schema = new Schema({
    dni: { 
        type: String, 
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: false
    },
    surname1:{
        type: String,
        required: true
    },
    surname2: {
        type: String,
        required: false
    },
    birthday: {
        type: Date,
        required: false
    },
    nationality: String,
    civilStatus: String,
    tags: [String],
    roles: [String],
    // Address: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'ContactAddress'
    //     }
    // ]
});

const schema: Model<IContacto> = mongooseConnection.model<IContacto>("Contact", contactSchema);
export = schema