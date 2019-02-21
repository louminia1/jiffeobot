const Discord = require("discord.js");
const radio = require("../Utils/Radio.json")


module.exports.run = async (bot, message, Args) => {
 
    if(Args[0] == "nrj"){
        message.member.voiceChannel.join()
        .then(connection => {
        connection.playArbitraryInput(radio.nrj);
         message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
        if(message.author.id == "525017193113452545"){ return; }
        message.reply('You need to join a voice channel first!');
    }

    if(Args[0] == "nostalgie"){
        message.member.voiceChannel.join()
        .then(connection => {
        connection.playArbitraryInput(radio.nostalgie);
         message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
        if(message.author.id == "525017193113452545"){ return; }
        message.reply('You need to join a voice channel first!');
    }

    if(Args[0] == "chérie"){
        message.member.voiceChannel.join()
        .then(connection => {
        connection.playArbitraryInput(radio.chérie);
         message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
        if(message.author.id == "525017193113452545"){ return; }
        message.reply('You need to join a voice channel first!');
    }

    if(Args[0] == "skyrock"){
        message.member.voiceChannel.join()
        .then(connection => {
        connection.playArbitraryInput(radio.skyrock);
         message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
        if(message.author.id == "525017193113452545"){ return; }
        message.reply('You need to join a voice channel first!');
    }

    if(Args[0] == "E1"){
        message.member.voiceChannel.join()
        .then(connection => {
        connection.playArbitraryInput(radio.E1);
         message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
        if(message.author.id == "525017193113452545"){ return; }
        message.reply('You need to join a voice channel first!');
    }

    if(Args[0] == "liste"){
        var radio_liste = new Discord.RichEmbed()
        .setColor("ff0000")
        .setTitle("Liste des Radio")
        .addField("Radio #1", "nrj")
        .addField("Radio #2", "nostalgie")
        .addField("Radio #3", "chérie")
        .addField("Radio #4", "ric")
        .addField("Radio #5", "rtl")
        .addField("Radio #6", "rtl2")
        .addField("Radio #7", "funradio")
        .addField("Radio #8", "E1")
        .addField("Radio #9", "virginradio")
        .addField("Radio #10", "rfm")
        .addField("Radio #11", "rmc")
        .addField("Radio #12", "bfm")
        .addField("Radio #13", "skyrock")
        .addField("Radio #14", "classique")
        .addField("Radio #15", "franceinfo")
        .addField("Radio #16", "franceinter")
        .addField("Radio #17", "franceculture")
        .addField("Radio #18", "francemusique")
        .addField("Radio #19", "francebleu")
        .addField("Radio #20", "fip")
        .addField("Radio #21", "mouv")
        .addField("Radio #22", "ouifm")
        .addField("Radio #23", "jazz")
        .addField("Radio #24", "mfm")
        .setTimestamp()
        message.channel.send(radio_liste).then ( message => { message.delete(100000)})
    }

}

module.exports.help = {
    name: "Radio"
}
