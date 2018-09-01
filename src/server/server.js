const express = require('express');

const app = express();
const path = require('path');
const morgan = require('morgan');
// morgan logging utility
app.use(morgan('tiny'))
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config({ path: '../../config/.env' });
const debug = require('debug')('APP:server');
const reload = require('reload')
const helmet = require('helmet');
const bcrypt = require('bcrypt');


debug('Setting up Config');
// server static files
app.use(express.static(path.join(__dirname, '/../client/public')));
// specify view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../client/public'));
// body parser
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

// TODO mongoose custom configuration
// mongoose.connect(process.env.DB_CONN).then(() => {
//     debug("Connection to DB was successful");
// }).catch( err => {
//     debug('App starting error:' + err);
// })

// router
const router = require('./routes/routes.js');

app.use('/', router);

reload(app);

module.exports = app;
