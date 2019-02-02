const Discord = require("discord.js");



module.exports.run = async (bot, message, Args) => {
    message.delete(1000)
    let text = Args[0]
    var Global_Message = new Discord.RichEmbed()
        .setColor("ff7f50")
        .setTitle("Information")
        .addField("info : ", `${text}`)
        .addField("Lien discord : ", "https://www.discord.me/jiffeo")
        .setTimestamp()
    message.guild.members.forEach(member => {
            if (member.id != bot.user.id && !member.user.bot)  member.send(Global_Message)
            console.log("message envoyer")
    })
}


    



module.exports.help = {
    name: "global"
}