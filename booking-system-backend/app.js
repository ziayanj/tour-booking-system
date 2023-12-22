const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const toursRouter = require('./routes/tours');
const bookingsRouter = require('./routes/bookings');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({ origin: '*' }));

app.use('/', indexRouter);
app.use('/bookings', bookingsRouter);
app.use('/tours', toursRouter);

module.exports = app;
