import { Schema, Types } from "mongoose";

export interface IContacto {
    DNI: String;
    FirstName: String;
    MiddleName: String;
    SurName1: String;
    SurName2: String;
    Birthday: Schema.Types.Date;
    Nationality: String;
    CivilStatus: String;
    Tags: Types.Array<String>;
    Roles: Types.Array<String>;
    Gender: String;
}