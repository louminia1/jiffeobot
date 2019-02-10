const Discord = require('discord.js');
const mongoose = require('mongoose');

const GC = require("../Model/game");
const GCs = require("../Model/game_Scan")

module.exports.run = async (bot, message, Args) => {
    var username = message.author.username
    var nombre = Math.floor(Math.random() * 1000000)
    var num = 1;
    var code = username+":"+nombre
    message.delete(5000);


    if(Args[0] === "create"){
        GC.findOne({ID: message.author.id}, (err, gc) =>{
        if(err) console.log(err)
        if(!gc){
        const newgc = new GC({
            User: username,
            ID: message.author.id,
            Code: code,
            inviter: 1,
            Point: 0
        })

        newgc.save().catch(err => console.log(err))
        message.author.createDM().then (channel => {
        channel.send("la commande pour les inviter !!game scan "+code)
        })
        }else{
            message.channel.send("vous avait deja un compte !").then ( msg => msg.delete(5000))
        }
        })
    }
    if(Args[0] === "scan"){
        message.delete(5000)
        if(!Args[1]){
            message.channel.send("Il vous manque le code de la personne !").then ( msg => msg.delete(5000))
        }
        GC.findOne({Code: Args[1]}
            , (err, gc) =>{
            if(err) console.log(err)
            if(Args[1] === gc.Code){
                if(message.channel.guild.id === "509790078969839628"){
                    var grade = message.guild.roles.find("name", "Voter");
                    if(!message.member.roles.find("name", "Voter")){
                        gc.inviter = gc.inviter + 1
                        gc.save()
                        message.member.addRole(grade);
                    }else{
                        message.channel.send("vous avait deja voter !").then ( msg => msg.delete(5000))
                    }
                }
            }
            })
        
        
    }
}



module.exports.help = {
    name: "game"
}