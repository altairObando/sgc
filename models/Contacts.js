const mongoose = require("mongoose");

const { Schema, model, models } = mongoose;

const contactSchema = new Schema({
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
    Nationality: Schema.Types.ObjectId,
    CivilStatus: String,
    Tags: [String],
    Roles: [String]
})


const Contact = models.Contact || model('Contact', contactSchema);

module.exports = Contact