
// PG DB connectivity information
const dbconfig= {
    postgresql: {
        host : process.env.PG_HOST || 'localhost',
        port : process.env.PG_PORT || 5432,
        userName : process.env.PG_USER_NAME || 'postgres',
        password : process.env.PG_PASSWORD || 'Atlas@123',
        database : process.env.PG_DATABASE || 'postgres'
    }    
}

module.exports = dbconfig;