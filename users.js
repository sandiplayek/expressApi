const express = require('express');
const pool = require('./connection');
const router = express.Router();

//..not needed
const app = express();
app.use(express.json());


router.get('/',async (req,res)=>  {
    //console.log('yess');
    //res.send('yess');
    const [result]= await pool.query('SELECT * FROM users WHERE 1');
    res.status(200).send(result);
})

router.get('/posts/:id',async (req,res)=>  {
    let id =req.params.id;
    console.log('yess',id);
   // res.send('yess');
    const [result]= await pool.query('SELECT * FROM `notes`, users WHERE notes.createBy=users.id AND notes.createBy = ?',[id]);
    res.status(200).send(result);
})

router.get('/create',async (req,res)=>  {
    let {name,email} =req.body;
    console.log('yess',id);
   // res.send('yess');
    const [result]= await pool.query('INSERT INTO users (name,email) VALUES (?, ?)',[title,content]);
    res.status(200).send(result);
})

module.exports=router;