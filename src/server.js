const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

app.use(cors());

const  server = require('http').Server(app);

app.use(express.json());

mongoose.connect('mongodb+srv://mauricio:mauricio@cluster0-bbb1n.mongodb.net/money?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(require('./routes'));

server.listen(3333, () => {
    console.log('Server started at port 3333 !');
});