import { Schema, Types } from "mongoose";

export interface IContacto {
    dni: String;
    firstName: String;
    middleName: String;
    surName1: String;
    surName2: String;
    birthday: Schema.Types.Date;
    nationality: String;
    civilStatus: String;
    tags: Types.Array<String>;
    roles: Types.Array<String>;
}