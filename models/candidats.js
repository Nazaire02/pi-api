const mongoose = require('mongoose');

const candidatSchema = new mongoose.Schema({ 
    nom: {type:String, required:true},
    prenoms: {type:String, required:true},
    anniversaire:{type:String, required:true},
    parti:{type:String, required:true},
    numCandidat:{type:Number, required:true},
    photoUrl:{type:String, required:false}
});

module.exports = mongoose.model('candidats', candidatSchema);