const mongoose = require('mongoose');

const electeurSchema = new mongoose.Schema({ 
    nom: {type:String, required:true},
    prenoms: {type:String, required:true},
    anniversaire:{type:String, required:true},
    idCard:{type:String, required:true},
    empreinte: {type:String, required:false},
    hasVoted: {type: Boolean, required:true, default: false},
    bureauDeVotre:{type:String, required:true},
    centreDeVote:{type:String, required:true},
});

module.exports = mongoose.model('electeurs', electeurSchema);