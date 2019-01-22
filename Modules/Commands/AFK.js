const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
    let reason = args.join(" ") ? args.join(' ') : 'test';

    let construct = {
        id: msg.author.id,
        reason: reason
    };

    bot.afk.set(msg.author.id, construct);
    return msg.reply("bot AFK " + `${reason}`).then (msg => { msg.delete(5000)});
}

module.exports.help = {
    name: "AFK"
}