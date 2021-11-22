const express = require('express');
const app = require('./app')
const config = require('./config/config')
const logger = require('./config/logger')
const mongoose = require('mongoose') 
let server;
mongoose.connect(config.mongoose.url,config.mongoose.options).then(()=>{
    logger.info('connected to MongoDB')
    server = app.listen(config.port,()=>{
        logger.info('Listening to port ${config.port}')
    })
})
