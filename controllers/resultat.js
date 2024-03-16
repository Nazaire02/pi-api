const Resultat = require('../models/resultats');

exports.addResultat = async (req, res) => {
    candidat = Resultat.findOne({ candidat: req.body.idCandidat })
        .then((candidat) => {
            if (candidat) {
                console.log(candidat.nbreVote)
                candidat.nbreVote += 1;
                candidat.save()
                    .then(() => res.status(201).json({
                        message: "Mise à jours avec succès",
                        succes: true
                    }))
                    .catch(err => console.log(err))
            } else {
                const resultat = new Resultat({
                    candidat: req.body.idCandidat
                });
                resultat.save()
                    .then(() => res.status(201).json({
                        message: "Nouveau resultat",
                        succes: true
                    }))
                    .catch(err => console.log(err))
            }
        })
};

exports.getResultat = async (req, res) => {
    await Resultat.find({})
        .then((resultats) => res.status(201).json({
            succes: true,
            resultats: resultats
        }))
        .catch((err) => console.log(err))
}

exports.getResultatByOrder = async (req, res) => {
    await Resultat.find({}).sort({nbreVote: -1})
        .then((resultats) => res.status(201).json({
            succes: true,
            resultats: resultats
        }))
        .catch((err) => console.log(err))
}