const Discord = require("discord.js");
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('Data.json');
const db = low(adapter);



module.exports.run = async (bot, message, Args) => {

   /* message.delete(1000)
        let text = message.content.slice('!!global'.length);
    var Global_Message = new Discord.RichEmbed()
        .setColor("ff7f50")
        .setTitle("Information")
        .addField("info : ", `${text}`)
        .addField("Lien discord : ", "https://www.discord.me/jiffeo")
        .addField("Lien Web : ", "https://jiffeo.tv/")
        .setTimestamp()
    message.guild.members.forEach(member => {

        var peudo = member.displayName
        var name_id = member.id
        var debut = 1

        if (!db.get("notif").find({identifiant: name_id,status: debut}).value()){
            db.get("notif").push({identifiant: name_id,status: debut}).write();
          }

        var userstatussdb = db.get("notif").filter({identifiant: name_id}).find('status').value();
        var userstatus = Object.values(userstatussdb)


       if(userstatus === 2){//desactiver 
            console.log(` Message bloquer pour ${peudo}`)
            return;
        }

        if(userstatus === 1 ){//activer 
            console.log(` Message envoyer à ${peudo}`)
            if (member.id != bot.user.id && !member.user.bot) member.send(Global_Message).then ( message => { message.delete(7000)})
        }

    });*/
}


module.exports.help = {
    name: "global"
}