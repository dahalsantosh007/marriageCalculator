const express = require('express');
const router  = express.Router();
const {updateGameInfo} = require('../controllers/UpdateController');

router
    .route('/')
    .post(updateGameInfo)

module.exports = router;