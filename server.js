require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
const connection = mongoose.connection
connection.on('conneccted', () => {
    console.log('Connected!')
})
connection.on('error', (err) => {
    console.log('Failed to connect')
})


var app = express();

var regionRouter = require('./routes/RegionController')
app.use('/api/regions', regionRouter)

var productRouter = require('./routes/ProductController')
app.use('/api/regions/:regionid/products', productRouter)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/build/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
});

module.exports = app;
