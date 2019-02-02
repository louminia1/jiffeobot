const Discord = require("discord.js");



module.exports.run = async (bot, message, Args) => {
    message.delete(1000)
    var Global_Message = new Discord.RichEmbed()
        .setColor("ff7f50")
        .setTitle("Information")
        .addField("info : ", "Hey, J'espère que tu vas bien!!\nJe viens t'informer du lancement d'une nouvelle plateforme de live video streaming nouvelle génération Jiffeo.\nNous sommes en train de créer un discord pour son lancement, je t'invite à le rejoindre pour en savoir un peu plus, et co-créer avec nous l'avenir de JIFFEO\nÀ bientôt  :smiley: sur le serveur de lancement JIFFEO")
        .addField("Lien discord : ", "https://www.discord.me/jiffeo")
        .setTimestamp()
    message.guild.members.forEach(member => {
            if (member.id != bot.user.id && !member.user.bot)  member.send(Global_Message)
            console.log("message envoyé")
    })
}


    



module.exports.help = {
    name: "global"
}