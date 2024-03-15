const candidats = require("../models/candidats");

exports.addCandidat = async (req, res) => {
    console.log(req.body)
    const candidat = new candidats({
        nom: req.body.nom,
        prenoms: req.body.prenoms,
        anniversaire: req.body.anniversaire,
        parti: req.body.parti,
        numCandidat: req.body.numCandidat
    });

    await candidat.save()
        .then(()=> res.status(201).json({
            message: "candidat créé avec succès",
            succes:true
        }))
        .catch(err=> res.status(400).json({
            error: true,
        }))
};