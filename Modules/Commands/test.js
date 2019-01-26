const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {
    return message.channel.send("test reussi")
}

module.exports.help = {
    name: "test"
}