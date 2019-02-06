const Discord = require("discord.js");
const moogose = require("mongoose");
const CFS = require("../Model/config")

module.exports.run = async (bot, message, Args) => {
    message.delete(2000)
    let ID = message.guild.id
    let name = message.guild.name
    let prefix = "!!";
    CFS.findOne({
        bot_ID: ID,
    }, (err, cfg) =>{
      if(err) console.log(err);
        if(!cfg){
          const newcfs = new CFG({
            bot_name: name,
            bot_ID: ID,
            bot_Prefix: prefix,
            bot_Log: " ",
            bot_Error: " ",
            bot_Info: " ",
            bot_Pack: "Gratuit"
          })
        newcfs.save().catch(err => console.log(err))
        }
    })
    if(Args[0] == "help"){
        message.channel.send("test")
    }
    if(Args[0] == "stats"){
        CFS.findOne({bot_ID: message.guild.id,}, (err, cfs) =>{
            if(err) console.log(err)
            var info_embed = new Discord.RichEmbed()
                .setColor("ff00e8")
                .setTitle("Jiffeo Maintenance")
                .addField("Bot Name :", cfs.bot_name)
                .addField("Bot id :", cfs.bot_ID)
                .addField("Bot prefix :", cfs.bot_Prefix)
                if(cfs.bot_Log == " "){
                    info_embed.addField("Bot Channel log :", "Désactiver (no define)")
                }else{
                    info_embed.addField("Bot Channel log :", cfs.bot_Log)
                }
                if(cfs.bot_Error == " "){
                    info_embed.addField("Bot Channel Error :", "Désactiver (no define)")
                }else{
                    info_embed.addField("Bot Channel Error :", cfs.bot_Error)
                }
                if(cfs.bot_Info == " "){
                    info_embed.addField("Bot Channel info :", "Désactiver (no define)")
                }else{
                    info_embed.addField("Bot Channel info :", cfs.bot_Info)
                }
                info_embed.addField("Bot Pack :", cfs.bot_Pack)
                info_embed.setTimestamp()
            message.channel.send(info_embed).then (message => {message.delete(15000)})
        })
    }
    if(Args[0] == "set"){

        if(Args[1] == "prefix"){
            CFS.findOne({
                bot_ID: ID,
            }, (err, cfs) =>{
              if(err) console.log(err);
                if(!Args[2]){
                     message.reply(cfs.bot_Prefix + "config set prefix (prefix)");
                }
                if(Args[2]){
                cfs.bot_Prefix = Args[2]
                cfs.save()
                return message.channel.send("Le prefix du serveur a bien était changer, prefix : " + cfs.bot_Prefix).then (message => {message.delete(15000)})
                }
            })
        }

        if(Args[1] == "log"){
            CFS.findOne({
                bot_ID: ID,
            }, (err, cfs) =>{
                if(err) console.log(err);
                if(!Args[2]){
                    message.reply(cfs.bot_Log + "config set log (channelID)");
                }
                if(Args[2]){
                    cfs.bot_Log = Args[2]
                    cfs.save()
                    return message.channel.send("Le channel logs a bien etait créé, IDchannel : " + cfs.bot_Log).then (message => {message.delete(15000)})
                }
            })
        }
            
          
        if(Args[1] == "error"){
            CFS.findOne({
                bot_ID: ID,
            }, (err, cfs) =>{
                if(err) console.log(err);
                if(!Args[2]){
                    message.reply(cfs.bot_Error + "config set error (channelID)");
                }
                if(Args[2]){
                    cfs.bot_Error = Args[2]
                    cfs.save()
                    return message.channel.send("Le channel error a bien etait créé, IDchannel : " + cfs.bot_Error).then (message => {message.delete(15000)})
                }
            })
        }

        if(Args[1] == "info"){
            CFS.findOne({
                bot_ID: ID,
            }, (err, cfs) =>{
                if(err) console.log(err);
                if(!Args[2]){
                    message.reply(cfs.bot_Info + "config set info (channelID)");
                }
                if(Args[2]){
                    cfs.bot_Info = Args[2]
                    cfs.save()
                    return message.channel.send("Le channel info a bien etait créé, IDchannel : " + cfs.bot_Info).then (message => {message.delete(15000)})
                }
            })
        }
    }
        
    }
        



module.exports.help = {
    name: "config"
}