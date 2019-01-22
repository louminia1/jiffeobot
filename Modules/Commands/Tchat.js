const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {

    let kvargs = message.content.split(" ").slice(1);
    let kv03 = kvargs.join(" ")
    var kv02 = message.guild.channels.find('name', 'jiffeo-interserveur');
    message.delete();
    if (message.channel.name !== 'jiffeo-interserveur') return;
    if (kv03){
    if(kv02){
        var tchat_embed = new Discord.RichEmbed()
        .setColor("ff00e8")
        .setTitle("Jiffeo Global")
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addField("Nom de l'utilisateur :", message.author.username + "#" + message.author.discriminator, true)
        .addField("Provenance du message :", message.guild.name, true)
        .addField(" 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 ", " 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 ")
        .addField("Message :", `${kv03}`)
        .addField(` 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 `, ` 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪 `)
        .setTimestamp()
        bot.channels.findAll('name', 'jiffeo-interserveur').map(channel => channel.send(tchat_embed))
        message.delete();
    }
}

                  
               
}

module.exports.help = {
    name: "is"
}