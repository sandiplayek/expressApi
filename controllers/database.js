//import { pool } from "./connection.js";
const pool = require('../connection')
 async function getNotes(){
    const [result]= await pool.query("SELECT * FROM notes");
    //console.log('host--',process.env.MYSQL_HOST);
    //console.log('user--',process.env.MYSQL_USER);
    return result;
}

 async function getNote(id){
    const [result]= await pool.query('SELECT * FROM notes WHERE id =?',[id]);
    return result[0];
}

 async function createtNote(title,createBy, content){
    const [result]= await pool.query('INSERT INTO notes (title,createBy,content) VALUES (?, ?)',[title,createBy,content]);
    //return result[0];
    let id =result.insertId;
    const notes = await getNote(id);
    console.log(notes)
    return notes;
}

//const insertID = await createtNote('4th value', '4th value content')
//console.log('insertID---',insertID)
// const note = await getNote(1);
// const notes = await getNotes();

// console.log(note)

module.exports = {
    getNotes, 
    getNote,
    createtNote
};
