const express = require('express');
const router = express.Router();


const electeur = require('../controllers/electeur');

router.post('/electeur/add', electeur.addElecteur);
router.get('/electeur/getAll', electeur.getElecteur);
router.get('/electeur/getByIdCard', electeur.getElecteur);


module.exports = router ;