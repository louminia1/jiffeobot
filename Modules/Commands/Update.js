const Discord = require("discord.js");


module.exports.run = async (bot, message, Args) => {
    message.delete(5000)
    var serveur = message.guild.id
    var nombreServ = message.guild.members.size
    var nombreglob = bot.users.size
    var nombreserv = bot.guilds.size
    if(serveur == "509790078969839628") {
        var channel1 = bot.channels.get("538441075556089876")
        channel1.setName(`Users: ${nombreServ}`)
        var channel2 = bot.channels.get("538449380290592799")
        channel2.setName(`Users Global: ${nombreglob}`)
        var channel3 = bot.channels.get("538452484662886440")
        channel3.setName(`Serveur: ${nombreserv}`)
        message.channel.send('Update Users à etait Activer').then ( message => { message.delete(5000)})

    }
}

module.exports.help = {
    name: "Update"
}