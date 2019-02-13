const Discord = require("discord.js"); 

module.exports.run = async (bot, message, Args) => {
    if(Args[0] == "bonjour" | Args[0] == "bonsoir" | Args[0] == "yo" | Args[0] == "Bonjour" | Args[0] == "Bonsoir" ){
        let data = [
            `Hey !`,
            `salut ${message.author.username}`,
          ]
          let reponse = data[Math.floor(Math.random() * data.length )];
        return message.channel.send(`${reponse}`)
    }
    if(Args[0] == "comment vas tu" | Args[0] == "cava" | Args[0] == "comment va" | Args[0] == "çava" ){
        let data = [
            `Bien et toi ?`,
            `Oui super ! :D`,
            'Parfait',
            "j'ai un coup de fatigue"
          ]
          let reponse = data[Math.floor(Math.random() * data.length )];
        return message.channel.send(`${reponse}`)
    }
    if(Args[0] == "Tfk" | Args[0] == "tu fais quoi de beaux" | Args[0] == "tu fais quoi" | Args[0] == "Tu fais quoi" ){
        let data = [
            `Bien et toi ?`,
            `Oui super ! :D`,
            'Parfait',
            "j'ai un coup de fatigue"
          ]
          let reponse = data[Math.floor(Math.random() * data.length )];
        return message.channel.send(`${reponse}`)
    }
    /*if(Args[0] == "Tfk" | Args[0] == "tu fais quoi de beaux" | Args[0] == "tu fais quoi" | Args[0] == "Tu fais quoi" ){
        let data = [
            `Bien et toi ?`,
            `Oui super ! :D`,
            'Parfait',
            "j'ai un coup de fatigue"
          ]
          let reponse = data[Math.floor(Math.random() * data.length - 1)];
        return message.channel.send(`${reponse}`)
    }*/
}

module.exports.help = {
    name: "jiffeo"
}