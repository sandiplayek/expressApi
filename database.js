import mysql from "mysql2" 
import dotenv from "dotenv"
dotenv.config()
//collections of connections to the database

// When you create a connection with mysql.createConnection, 
// you only have one connection, and it lasts until you close it 
// OR connection closed by MySQL.

// mysql.createPool is a place where connections get stored.
// When you request a connection from a pool,you will receive a 
// connection that is not currently being used, or a new connection.

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mass4Pass#2020',
    database: 'notes_app'
}).promise()

export async function getNotes(){
    const [result]= await pool.query("SELECT * FROM notes");
    //console.log('host--',process.env.MYSQL_HOST);
    //console.log('user--',process.env.MYSQL_USER);
    return result;
}

export async function getNote(id){
    const [result]= await pool.query('SELECT * FROM notes WHERE id =?',[id]);
    return result[0];
}

export async function createtNote(title,content){
    const [result]= await pool.query('INSERT INTO notes (title,content) VALUES (?, ?)',[title,content]);
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
