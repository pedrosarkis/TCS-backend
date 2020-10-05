
'use strict';
const express = require('express');
const app = express();

const cors = require('cors');
const bodyparser = require('body-parser');
const userRoute = require('./routes/users');
const newsRoute = require('./routes/news');
const groupRoute = require('./routes/group');
const database = require('./database/connection');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, content-type, accept');
    app.use(cors());
    next();
});

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use('/user', userRoute);
app.use('/news', newsRoute);
app.use('/group', groupRoute);
database.connectDabatase();

const port = process.env.PORT || 8080;
app.listen(port);
