const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {
    message.delete();
    message.author.createDM().then (channel => {
        var Help_Commands = new Discord.RichEmbed()
        .setColor("ff7f50")
        .setTitle("︵‿︵‿︵‿︵ 👩 Jiffeo Global 👦 ︵‿︵‿︵‿︵")
        .setTimestamp()
        channel.send(Help_Commands).then ( message => { message.delete(100000)})

        var Help_Jeux = new Discord.RichEmbed()
        .setColor("ff0000")
        .setTitle("︵‿︵‿︵‿︵ 🎳 Jiffeo Jeux 🏓 ︵‿︵‿︵‿︵")
        .setTimestamp()
        channel.send(Help_Jeux).then ( message => { message.delete(100000)})

        var Help_Options = new Discord.RichEmbed()
        .setColor("00ffd8")
        .setTitle("︵‿︵‿︵‿︵ 🗂️ Jiffeo Options 📊 ︵‿︵‿︵‿︵")
        .setTimestamp()
        channel.send(Help_Options).then ( message => { message.delete(100000)})

        var Help_Securité = new Discord.RichEmbed()
        .setColor("0037ff")
        .setTitle("︵‿︵‿︵‿︵ 🔐  Jiffeo Sécurity 🔓 ︵‿︵‿︵‿︵")
        .setTimestamp()
        channel.send(Help_Securité).then ( message => { message.delete(100000)})

        var Help_Musique = new Discord.RichEmbed()
        .setColor("b600ff")
        .setTitle("︵‿︵‿︵‿︵ 🎧 Jiffeo Musique 📽️ ︵‿︵‿︵‿︵")
        .setTimestamp()
        channel.send(Help_Musique).then ( message => { message.delete(100000)})

        var Help_InterServeur = new Discord.RichEmbed()
        .setColor("00ffcb")
        .setTitle("︵‿︵‿︵‿︵ 🎭 Jiffeo InterServeur 🎭 ︵‿︵‿︵‿︵")
        .addField("!!is (message)", "parler dans interserveur")
        .addField("︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵", " 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪")
        .setTimestamp()
        channel.send(Help_InterServeur).then ( message => { message.delete(100000)})

        var Help_Manageur = new Discord.RichEmbed()
        .setColor("d6c22a")
        .setTitle("︵‿︵‿︵‿︵ ❌ Jiffeo Manageur ✔️ ︵‿︵‿︵‿︵")
        .setTimestamp()
        channel.send(Help_Manageur).then ( message => { message.delete(100000)})

        var Help_Langue = new Discord.RichEmbed()
        .setColor("5218e2")
        .setTitle("︵‿︵‿︵‿︵ 🏴 Jiffeo Langage 🏳️ ︵‿︵‿︵‿︵")
        .setTimestamp()
        channel.send(Help_Langue).then ( message => { message.delete(100000)})

        
    })

}
                  
                

module.exports.help = {
    name: "help"
}