const Pool = require('pg-pool')
const dbconfig = require('../../config/dbconfig')

const pool = new Pool({
    user: dbconfig.postgresql.userName,
    host: dbconfig.postgresql.host,
    database: dbconfig.postgresql.database,
    password: dbconfig.postgresql.password,
    port: dbconfig.postgresql.port,
    max: 20, // set pool max size to 20
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
    maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
})



module.exports = pool;
