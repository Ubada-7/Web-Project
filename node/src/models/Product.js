const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        min: 3,
    },
    company_name: {
        type: String,
        required: true,
        min: 3,
    },
    product_name: {
        type: String,
        required: true,
        min: 3
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
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);