const express = require('express');
const router = express.Router();

const resultat = require('../controllers/resultat');


//router.get('/resultat/get', resultat.addResultat);
router.post('/resultat/add', resultat.addResultat);
router.get('/resultat/getAll', resultat.getResultat);
router.get('/resultat/getAllByOrder', resultat.getResultatByOrder);


module.exports = router; 