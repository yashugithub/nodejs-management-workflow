
const pool = require('../db/pgconnection')

const getAllUsers = (request, response) => {
    
    pool.connect().then(client => {
        client.query('select * from users').then(res => {
          console.log('Get all users infromation');
          client.release();        
          response.status(200).json(res.rows);
        })
        .catch(error => {
          console.log('Error while fetching users information', error.message);
          client.release();
          response.status(500).json(error);
        })

        return response;
    })
}

const getUserById = (request, response) => {
    pool.connect().then(client => {
        client.query(`select * from users where id=${request.params.id}`).then(res => {
          console.log('Get user information for user id ', request.params.id);
          client.release();        
          response.status(200).json(res.rows);
        })
        .catch(error => {
          console.log('Error while fetching users information', error.message);
          client.release();
          response.status(500).json(error);
        })

        return response;
    })
}

const createUser = (request, response) => {
    const queryString = `INSERT INTO users(name) VALUES ('${request.body.name}');`
    
    pool.connect().then(client => {
        client.query(`${queryString}`).then(res => {
          console.log(`Create user '${request.body.name}'`);
          client.release();        
          response.status(201).json(res.rows);
        })
        .catch(error => {
          console.log('Error while Creating user ', error.message);
          client.release();
          response.status(500).json(error);
        })

        return response;
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}