const express = require('express');
const router = express.Router();

const candidat = require('../controllers/candidat');
const electeur = require('../controllers/electeur');


router.post('/candidat/add', candidat.addCandidat);
router.get('/candidat/get', candidat.getCandidat);
router.get('/candidat/getById', candidat.getCandidatById);


module.exports = router ;