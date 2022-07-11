const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const AddressSchema = new Schema({
    country: String,
    department: String,
    town: String,
    line1: String,
    line2: String,
    phone: String,
    email: String
})


const Contact = mongoose.models.Contact || model('ContactAddress', AddressSchema);

module.exports = Contact