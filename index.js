const express = require('express')
const app = express();
const http = require('http');
const mongoose = require('mongoose');
const config = require('./config/database')
const bodyParser = require('body-parser');

// API file for interacting with MongoDB
const userRoutes = require('./routes/candidatRoute');

if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'dev'){

    // Connect To Database
    mongoose.connect(config.database, {
        auth: {
            user: config.mongo_user,
            password: config.mongo_password
        }});
}
else {

    mongoose.connect(config.database);
}

// On Connection
mongoose.connection.on('connected', () => console.log('connected'));

// On Alert
mongoose.connection.on('alert', () => console.log('alert'));

// On Error
mongoose.connection.on('error', () => console.log('error'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


const apiName = "/api";
app.use(apiName, userRoutes);

const port = process.env.PORT || "8081";
app.set(port);

const serveur = http.createServer(app);
serveur.listen(port, ()=>console.log(`Running on localhost:${port}`));