require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const productRouter = require('./components/product');
const reviewRouter = require('./components/review');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/products', productRouter);
app.use('/review', reviewRouter);

module.exports = app;
