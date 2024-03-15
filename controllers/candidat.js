const candidats = require('../models/candidats');
const Candidat = require('../models/candidats');

exports.addCandidat = async (req, res) => {
    const candidat = new Candidat({
        nom:req.body.nom,
        prenoms:req.body.prenoms,
        anniversaire:req.body.anniversaire,
        parti: req.body.parti,
        numCandidat: req.body.numCandidat
    });

    await candidat.save()
        .then(()=> res.status(201).json({
            message: "candidat créé avec succès",
            succes:true
        }))
        .catch(err=> console.log(err))
};

exports.getCandidat = async (req, res)=>{
    await Candidat.find({})
        .then((candidats)=> res.status(201).json({
            succes: true,
            candidats: candidats
        }))
        .catch((err)=>console.log(err))
}