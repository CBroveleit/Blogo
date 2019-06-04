const { Pool } = require('pg');
require('dotenv').config();

console.log(process.env);
console.log(__dirname);

const pool = new Pool({
  database: 'blogo',
  port: 5432,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

pool.connect((err) => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('connected');
  }
});