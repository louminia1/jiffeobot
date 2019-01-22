const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {
let Lis = bot.users.size
var List_embed = new Discord.RichEmbed()
.setColor("ff9000")
.addField("Liste :󠂪󠂪 ", `${Lis} Users`)
message.channel.sendMessage(List_embed).then ( message => {message.delete(15000)});
message.delete();
}

module.exports.help = {
    name: "liste"
}