const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();

app.use(cors());

const  server = require('http').Server(app);
const io =  require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', data => {
        socket.join(data);
    })
});


app.use((req, res, next) => {
    req.io = io;
   
    return next();
   });
   

app.use(express.json());

mongoose.connect('mongodb+srv://mauricio:mauricio@cluster0-bbb1n.mongodb.net/money?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(require('./routes'));

server.listen( process.env.PORT ||3333 , () => {
    console.log('Server started at port 3333 !');
});