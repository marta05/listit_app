const { Pool, Client } = require('pg')

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  max: 10,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
    application_name: 'formly',
});


const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    // ssl: {
    //     rejectUnauthorized: false,
    //   },
    max: 10,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000,
    application_name: 'formly_client'
  })

module.exports = {
    query: (text, params) => pool.query(text, params),
    client,
    pool,
}