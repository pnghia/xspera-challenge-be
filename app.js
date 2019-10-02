require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const productRouter = require('./components/products');
const reviewRouter = require('./components/reviews');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/products', productRouter);
app.use('/review', reviewRouter);

module.exports = app;
