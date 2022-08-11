import {Model, Schema } from 'mongoose';
import DataAccess from '../database/dataAcces';
import { IContacto } from './interfaces/IContacto';

var mongooseConnection = DataAccess.mongooseConection;


const contactSchema: Schema = new Schema({
    DNI: { 
        type: String, 
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    MiddleName: {
        type: String,
        required: false
    },
    Surname1:{
        type: String,
        required: true
    },
    Surname2: {
        type: String,
        required: false
    },
    Birthday: {
        type: Date,
        required: false
    },
    Nationality: String,
    CivilStatus: String,
    Tags: [String],
    Roles: [String],
    Gender: String,
    // Address: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'ContactAddress'
    //     }
    // ]
});

const schema: Model<IContacto> = mongooseConnection.model<IContacto>("Contact", contactSchema);
export = schema