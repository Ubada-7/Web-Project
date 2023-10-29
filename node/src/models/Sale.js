const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    sales: [{
        company_name: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            min: 3,
        },
        variant: {
            type: String,
            required: true,
            min: 3,
        },
        size: {
            type: String,
            required: true,
            min: 3,
            max: 255
        },
        price: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        flavor: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }]
});

module.exports = mongoose.model('Sale', saleSchema);