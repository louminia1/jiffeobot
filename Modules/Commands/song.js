const Discord = require("discord.js");

const ytdl = require("ytdl-core");


const queue = new Map();

module.exports.run = async (bot, message, Args) => {
    const ServeurQueue = queue.get(message.guild.id);
    if(Args[0] === "play"){
        message.delete(1000)
        if(!message.member.voiceChannel) return;
        if(message.guild.me.voiceChannel) return;
        if(!Args[1]) return;
        let validate = await ytdl.validateURL(Args[1])
        let info = await ytdl.getInfo(Args[1])
        let connection = await message.member.voiceChannel.join()
        let dispatcher = await connection.playStream(ytdl(Args[1], {filter: 'audioonly'}))
        if(!validate) return;
        message.channel.send(`Musique en cours: ${info.title}`);
    }
    if(Args[0] === "leave"){
        message.delete(1000)
        message.member.voiceChannel.leave()
    }
}

module.exports.help = {
    name: "M"
}
