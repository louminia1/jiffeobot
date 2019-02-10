const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {
var speudo2 = Args[0]
 var nombre = Math.floor(Math.random() * 101)
 var Love_embed = new Discord.RichEmbed()
    .addField("Love Level :󠂪󠂪", '```Love Level pour : ' + `${speudo2} =  ${nombre}% `+ '♥```')
    if(nombre >= 75){
      Love_embed.setColor('#ff0000')
      message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
      return;
    }
    if(nombre >= 50){
    Love_embed.setColor('#0AE8E8')
    message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
    return;
    }
    if(nombre >= 25){
        Love_embed.setColor('#28E80A')
        message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
        return;
    }
    if(nombre >= 0){
        Love_embed.setColor('#000000')
        message.channel.sendMessage(Love_embed).then ( msg => {msg.delete(25000)});
        return;
    }
}

module.exports.help = {
    name: "love"
}