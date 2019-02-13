const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {
    message.delete(5000)
    var speudo = message.author.username
var speudo2 = message.mentions.members.first();
 var nombre = Math.floor(Math.random() * 101)
 var Love_embed = new Discord.RichEmbed()
    .addField("Love Level :󠂪󠂪", `${speudo} et amoureux(se) de ${speudo2} à ${nombre}%`)
    .setThumbnail(speudo2.avatarURL)
    if(nombre >= 75){
      Love_embed.setColor('#ff0000')
      Love_embed.setFooter(`C'est pour quand le bébé ?`)
      message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
      return;
    }
    if(nombre >= 50){
    Love_embed.setColor('#0AE8E8')
    Love_embed.setFooter(`Vous pouvais, vous être fais pour être ensemble !`)
    message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
    return;
    }
    if(nombre >= 25){
        Love_embed.setColor('#28E80A')
        Love_embed.setFooter(`Vous avait une chance `)
        message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
        return;
    }
    if(nombre >= 10){
        Love_embed.setColor('#000000')
        Love_embed.setFooter(`Vous avait une petite chance `)
        message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
        return;
    }
    if(nombre <= 10){
        Love_embed.setColor('#000000')
        Love_embed.setFooter(`Tu peux l'oublier :D`)
        message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
        return;
    }
}

module.exports.help = {
    name: "love"
}