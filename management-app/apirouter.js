const path = require("path");
const router = require('express').Router();
const UserController = require('./controller/UserController');

// Application heartbeat check
router.get('/heartbeat', (req, res) =>{
    res.send('Management apllication is running!');
})

// Router for Users api's
router.use('/users', UserController);

// export router
module.exports = router;