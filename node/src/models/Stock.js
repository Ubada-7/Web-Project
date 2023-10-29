const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true,
        min: 3,
    },
    type: {
        type: String,
        required: true,
        min: 3,
    },
    variant: {
        type: String,
        required: true,
        min: 3
    },
    size: {
        type: String,
        required: true,
        min: 3
    },
    flavor: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
        min: 3
    },
    quantity: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true,
    },
    retail_price: {
        type: Number,
        required: true,
    },
    distribution_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Stock', stockSchema);