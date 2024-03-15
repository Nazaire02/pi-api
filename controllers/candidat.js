const Candidat = require('../models/candidats');

exports.addCandidat = async (req, res) => {
    const candidat = new Candidat({
        nom:req.body.nom,
        prenoms:req.body.prenoms,
        anniversaire:req.body.anniversaire,
        parti: req.body.parti,
        numCandidat: req.body.numCandidat
    });

    candidat.save()
        .then(()=> res.status(201).json({
            message: "candidat créé avec succès",
            succes:true
        }))
        .catch(err=> console.log(err))
};