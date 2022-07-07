const mongoose = require("mongoose");

const { Schema, model } = mongoose;

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
    Nationality: String,
    CivilStatus: String,
    Tags: [String],
    Roles: [String]
})


const Contact = mongoose.models.Contact || model('Contact', contactSchema);

module.exports = Contact