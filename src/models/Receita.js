const mongoose = require('mongoose');

const Receita = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },

}, {
        timestamps: true
    });

module.exports = mongoose.model('Receita', Receita);