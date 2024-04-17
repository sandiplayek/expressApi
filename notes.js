//import express from 'express'
const express = require('express');

//..not needed
const app = express();
app.use(express.json());


const router= express.Router();
//import { getNote,getNotes,createtNote } from './database.js';

let { getNote,getNotes,createtNote } =require('./controllers/database');

router.get('/', async (req,res)=>{
    const notes = await getNotes();
    res.send(notes)
})

router.get('/get/:id', async (req,res)=>{
    const id = req.params.id;
    const notes = await getNote(id);
    res.status(200).send(notes)
})

router.post('/create', async (req,res)=>{
    const {title,createBy, content} = req.body;
    console.log('yes');
    res.send('yess')
    const noteid = await createtNote(title,createBy,content);
    res.status(200).send(noteid)
})


module.exports = router;