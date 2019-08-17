const mongoose = require('mongoose');
const receitas = require('./Receita');
const despesas = require('./Despesa');

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    receitas: [{
        type: mongoose.Schema.Types.ObjectId, ref: receitas
    }],
    despesas: [{
        type: mongoose.Schema.Types.ObjectId, ref: despesas
    }]
}, {
        timestamps: true,
    });



module.exports = mongoose.model('User', User);