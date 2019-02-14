const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.content.send("Vous n'avez pas la permission pour clear des messages")

      if(!Args[0]) return message.channel.send("Veuillez préciser le nombre de messages à supprimer.");

      message.channel.bulkDelete(Args[0]).then(() => {
      message.channel.send(`${Args[0]} Messages Supprimés :white_check_mark:`);
      })
    
    }

module.exports.help = {
    name: "clear"
}