const discord = require("discord.js");
const mongoose = require('mongoose');
const SP = require('../Model/Suspect.js')

module.exports.run = async (bot, message, Args) => {
    var serve = message.guild.name
    var staffname = message.author.username + "#" + message.author.discriminator
    var staffid = message.author.id
    var serveid = message.guild.id
    var spuser = Args[0]
    var spuserid = Args[1]
    var raison = message.content.split(" ").slice(3);
    SP.findOne({
        userID: message.author.id,
      }, (err, sp) =>{
        if(err) console.log(err);
        if(!sp){
          const newSP = new SP({
            UserStaff: staffname,
            UserStaffID: staffid,
            serveurName: serve,
            serveurID: serveid,
            spusername: spuser,
            spuserID: spuserid,
            Raison: raison
          })
          newSP.save().catch(err => console.log(err)) 
        }else{
            sp.UserStaff = sp.staffname
            sp.UserStaffID = sp.staffid
            sp.serveurName = sp.serve
            sp.serveurID = sp.serveid
            sp.spusername = sp.spuser
            sp.spuserID = spuserid
            sp.Raison = sp.raison;
            sp.save()
        }
    })
    message.reply('Votre rapport a bien etait envoyer ! :D').then ( msg => { msg.delete(5000)})

}

module.exports.help = {
    name: "SP"
}