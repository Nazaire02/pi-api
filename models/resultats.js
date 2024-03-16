const mongoose = require('mongoose');

const resultatSchema = new mongoose.Schema({ 
    candidat: {type: mongoose.Schema.Types.ObjectId, ref: 'candidats', required:true},
    nbreVote: {type:Number, required:true, default: 1}
});

module.exports = mongoose.model('resultats', resultatSchema);