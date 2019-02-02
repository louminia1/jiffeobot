const mongoose = require("mongoose");

const ICchema = mongoose.Schema({
    Numero: Number,
    Pseudo: String,
    Prenom: String,
    ID: Number,
    Sexe: String,
    Email: String,
    MDP: String,
    Date: String,
    Verifier: String,
    Warn: Number,
    Ban: Number,
    BlackListe: String,
    Moderator: String
})

module.exports = mongoose.model("IC", ICchema);