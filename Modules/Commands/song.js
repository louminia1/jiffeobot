const Discord = require("discord.js");

const YTDL = require("ytdl-core");
const servers = {};

module.exports.run = async (bot, message, Args) => {
    if (Args[0] === 'stop') {
        var server = servers[message.guild.id];
        if(message.guild.voiceChannel) message.guild.voiceChannel.disconnect();
    }
    if (Args[0] === 'skip') {
        var server = servers[message.guild.id];
        if(server.dispatcher) server.dispatcher.end();
    }
    if (Args[0] === 'play') {
        if(!Args[1]){
            message.channel.send("Invalide lien");
        }
        if(!message.member.voiceChannel){
            message.channel.send("Error");
        }
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue: []
        };

        var server = servers[message.guild.id]
        server.queue.push(Args[1]);


        if(!message.guild.voiceChannel) message.member.voiceChannel.join().then(function(connection) {
            play(connection, message);
        })
        
        
    }
      
     
}

module.exports.help = {
    name: "song"
}

function play(connection, message){
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    })
}