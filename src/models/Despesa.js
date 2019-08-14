const mongoose = require('mongoose');

const Despesa = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, {
        timestamps: true
    });

module.exports = mongoose.model('Despesa', Despesa);