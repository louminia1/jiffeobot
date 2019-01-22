const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {
 var ping_embed = new Discord.RichEmbed()
  .addField("Ping du bot :󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪", '```Ping : ' + Math.round(bot.ping) + 'ms```')
  .setColor("ff9000")
  message.channel.sendMessage(ping_embed).then ( message => {message.delete(5000)});
  console.log("Un utilisateur a demandé la command ping")
  message.delete(); 
}

module.exports.help = {
    name: "ping"
}