//import express from 'express'
const express = require('express');

//import router from "./notes.js"
const app = express();
const port = 5000;

app.use(express.json());
const notes = require('./notes.js');
const users = require('./users.js')
app.use('/notes',notes);
app.use('/users',users);

app.listen(port,()=>{
    console.log('listening from port '+port)
})

