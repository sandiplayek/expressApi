// import mysql from "mysql2"
// import dotenv from "dotenv"
const mysql = require('mysql2');
require('dotenv').config();


//collections of connections to the database

// When you create a connection with mysql.createConnection, 
// you only have one connection, and it lasts until you close it 
// OR connection closed by MySQL.

// mysql.createPool is a place where connections get stored.
// When you request a connection from a pool,you will receive a 
// connection that is not currently being used, or a new connection.
 const pool = mysql.createPool({
    host: process.env.localhost,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'Mass4Pass#2020',
//     database: 'notes_app'
// }).promise()


module.exports=pool;

