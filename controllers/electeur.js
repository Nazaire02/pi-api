const Electeur = require('../models/electeurs');
const Candidat = require('../models/candidats');

exports.addElecteur = async (req, res) => {
    const candidat = new Electeur({
        nom:req.body.nom,
        prenoms:req.body.prenoms,
        anniversaire:req.body.anniversaire,
        idCard: req.body.idCard,
        bureauDeVotre:req.body.bureauDeVotre,
        centreDeVote:req.body.centreDeVote,
    });

    await candidat.save()
        .then(()=> res.status(201).json({
            message: "electeur créé avec succès",
            succes:true
        }))
        .catch(err=> console.log(err))
};

exports.getElecteur = async (req, res)=>{
    await Electeur.find({})
        .then((electeurs)=> res.status(201).json({
            succes: true,
            electeurs: electeurs
        }))
        .catch((err)=>console.log(err))
}

exports.getElecteurByIdCard = async (req, res)=>{
    await Electeur.find({idCard: req.body.idCard})
        .then((electeurs)=> res.status(201).json({
            succes: true,
            electeurs: electeurs
        }))
        .catch((err)=>console.log(err))
}