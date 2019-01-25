const Discord = require("discord.js");
const moogose = require("mongoose");
const CFG = require("../Model/config")

module.exports.run = async (bot, message, Args) => {
    let ID = message.guild.id
    let name = message.guild.name
    let prefix = "!!";
    CFG.findOne({
        bot_ID: ID,
    }, (err, cfg) =>{
      if(err) console.log(err);
        if(!cfg){
          const newcfg = new CFG({
            bot_name: name,
            bot_ID: ID,
            bot_Prefix: prefix,
            bot_Log: " ",
            bot_Error: " ",
            bot_Info: " ",
            bot_Pack: "Gratuit"
          })
        newcfg.save().catch(err => console.log(err))
        }
    })
    if(Args[0] == "help"){
        message.channel.send("test")
    }
    if(Args[0] == "stats"){
        CFG.findOne({bot_ID: ID,}, (err, cfg) =>{
            var info_embed = new Discord.Richembed()
                .setColor("ff00e8")
                .setTitle("Jiffeo Maintenance")
                .setThumbnail(`${message.guild.displayAvatarURL}`)
                .addField("Bot Name :", cfg.bot_name)
                .addField("Bot id :", cfg.bot_ID)
                .addField("Bot prefix :", cfg.bot_prefix)
                .addField("Bot Channel log :", cfg.bot_Error)
                .addField("Bot Channel Error :", cfg.bot_info)
                .addField("Bot Channel info :", cfg.bot_Pack)
                .setTimestamp()
             return message.channel.send(info_embed)
        })
    }
    if(Args[0] == "set"){
        if(Args[1] == "prefix"){
            CFG.findOne({
                bot_ID: ID,
            }, (err, cfg) =>{
              if(err) console.log(err);
              if(!Args[2]){
                  message.reply(cfg.bot_Prefix + "config set prefix (prefix)");
              }
              if(Args[2]){
                cfg.bot_Prefix = Args[2]
                cfg.save()
            }
            })
        }
        if(Args[1] == "log"){
            
        }
        if(Args[1] == "error"){
            
        }
        if(Args[1] == "info"){
            
        }
        
    }

}

module.exports.help = {
    name: "config"
}