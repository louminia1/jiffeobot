const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {
    let kvargs = message.content.split(" ").slice(1);
                let kv03 = kvargs.join(" ")
                var kv02 = message.guild.channels.find('name', 'jiffeo-interserveur');
                message.delete();
                if (!kv02) return message.guild.createChannel("jiffeo-interserveur", " ");
                if (message.channel.name !== 'jiffeo-interserveur') return message.reply('Les commandes doivent être faite dans le salon "jiffeo-interserveur"')
                if (!kv03) return message.reply("Tu n'as pas écrit de message")
                    var tchat_embed = new Discord.RichEmbed()
                        .setColor("ff00e8")
                        .setTitle("Jiffeo Global")
                        .setThumbnail(`${message.author.displayAvatarURL}`)
                        .addField("Nom de l'utilisateur :", message.author.username + "#" + message.author.discriminator, true)
                        .addField("Provenance du message :", message.guild.name, true)
                        .addField("Message :", "**-----------------------------------------------------------**")
                        .addField(`${kv03}`, `**------------------------------------------------------------**`)
                        .setTimestamp()
                  bot.channels.findAll('name', 'jiffeo-interserveur').map(channel => channel.send(tchat_embed))
                  message.delete(1000)
                            }

module.exports.help = {
    name: "is"
}