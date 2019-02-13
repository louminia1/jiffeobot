const Discord = require("discord.js");

module.exports.run = async (bot, message, Args) => {
    // message suprimée
    message.delete(5000)
    //variable
    var Guerrier = message.author.username
    var Homme = Math.floor(Math.random() * 300)
    var zombie = Math.floor(Math.random() * 300)
    var Ware = 0;

    //debut du jeux 
    setInterval(() => {
        if(Homme <= mort | zombie <= zmort){ return; }
        var mort = Math.floor(Math.random() * 5)
        var zmort = Math.floor(Math.random() * 6)

        if(Homme >= zombie | Homme <= zombie){
            if(Homme <= mort | zombie <= zmort){ return; }
            Homme = Homme - mort
            zombie = zombie - zmort
            Ware = Ware + 1
            message.channel.sendMessage(`La vague suivante en cours de chargement, Vague ${Ware}.`).then ( msg => msg.delete(200000))
            message.channel.sendMessage(`La vague et terminée. Il reste ${Homme} Guerrier contre ${zombie}`).then ( msg => msg.delete(2000000))    
        }
    
        if(Homme <= 0 | zombie <= 0){
            message.channel.sendMessage(`Vous avais terminée a la vage ${Ware}`).then ( msg => msg.delete(250000))
            if(Homme <= mort | zombie <= zmort){ return; }
        }

    }, 15000);


}

module.exports.help = {
    name: "Guerre"
}
