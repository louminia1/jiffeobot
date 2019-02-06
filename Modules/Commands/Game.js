const Discord = require('discord.js');
const mongoose = require('mongoose');

const GC = require("../Model/game_creator");

module.exports.run = async (bot, message, Args) => {
    var id = message.author.id
    var username = message.author.username
    var nombre = Math.floor(Math.random() * 10000)
    var code = username+":"+nombre
    message.delete(5000);


    if(Args[0] === "create"){
        GC.findOne({ID: id}, (err, gc) =>{
        if(err) console.log(err)
        if(!gc){
        const newgc = new GC({
            User: username,
            ID: id,
            Code: code,
            inviter: 0
        })
        newgc.save().catch(err => console.log(err))
        message.author.createDM().then (channel => {
        channel.send("la commande pour les inviter !!game join "+code)
        })
    }
        })
    }

    if(Args[0] === "join"){
        var verf = Args[1]
        GC.findOne({Code: verf}, (err, gc) =>{
            if(err) console.log(err)
            if(verf === gc.Code){
                gc.Code = gc.Code + 1
                message.channel.send("1 point rajouter pour " +gc.User+" par "+ message.author.username).then (msg => { msg.delete(10000)});
            }else{
                return message.channel.send("le code et incorrect").then (msg => { msg.delete(20000)});
            }
            
        })
    }
    if(Args[0] === "stats"){
        var ide = message.author.id
        var code = Args[1]
        if(Args[1] === "" || Args[1] === " " ){
            return message.channel.send("Essayer : (préfix)game stats (Vôtre code)")
        }else{
            GC.findOne({
                ID: ide, Code: code
            }, (err, gc) =>{
                if(err) console.log(err)
                if(ide === gc.ID){
                    if(code === gc.Code){
                        return message.channel.send("Profil de "+gc.User+", Vous avait "+gc.inviter+" Point(s)").then (msg => { msg.delete(20000)});
                    }else{
                        return message.channel.send("Vôtre code n'a pas etait trouver !").then (msg => { msg.delete(20000)});
                    }
                }else{
                    return message.channel.send("Vôtre profil n'a pas etait trouver !").then (msg => { msg.delete(20000)});
                }

        })
    }
}
}

module.exports.help = {
    name: "game"
}