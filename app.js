import express from 'express'
import { getNote,getNotes,createtNote } from './database.js';
const app = express();
const port = 5000;

app.use(express.json())

app.listen(port,()=>{
    console.log('listening from port '+port)
})

app.get('/notes', async (req,res)=>{
    const notes = await getNotes();
    res.send(notes)
})

app.get('/notes/:id', async (req,res)=>{
    const id = req.params.id;
    const notes = await getNote(id);
    res.status(201).send(notes)
})

app.post('/notes', async (req,res)=>{
    const {title, content} = req.body;
    const noteid = await createtNote(title,content);
    res.status(201).send(noteid)
})