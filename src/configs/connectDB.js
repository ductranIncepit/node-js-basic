// get the client
import mysql from 'mysql2/promise';

// create the connection to database

const pool =  mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nodejsbasic',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

});



export default pool;