const express = require('express');
const router = express.Router();

const candidat = require('../controllers/candidat')


router.post('/candidat/add', candidat.addCandidat);


module.exports = router ;