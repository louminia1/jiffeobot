const discord = require('discord.js');

module.exports.run = async (bot, message, Args) => {
    const invites = {};
    message.delete(1000)
    var serveurs = Args[0];
    bot.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
          invites[g.id] = guildInvites;
        });
    })
    message.channel.send(invites)

}

module.exports.help = {
    name: "invite"
}