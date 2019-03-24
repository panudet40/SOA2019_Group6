const mongoose = require('../../../config/db');

const customerSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    phone_number : String

});

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;