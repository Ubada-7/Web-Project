const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
    },
    address: {
        type: String,
        required: true,
        min: 3
    },
    phone_number: {
        type: String,
        required: true,
        min: 11
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Company', companySchema);