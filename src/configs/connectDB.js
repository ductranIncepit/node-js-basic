// get the client
import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nodejsbasic',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

});



export default connection;