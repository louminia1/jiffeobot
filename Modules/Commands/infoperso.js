const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) =>{
    message.delete()
    /*
    if(Args[0] === "id" || Args[0] === "Id" || Args[0] === "ID"){
        var info_perso = new Discord.RichEmbed()
        .setColor("00ffd8")
        .setTitle("Information")
        .addField("ID", `${Args[1]} ID`)
        .setTimestamp()
        channel.send(info_perso).then ( message => { message.delete(100000)})
    }
    message.delete()
*/


}

module.exports.help = {
    name: "Iperso"
}