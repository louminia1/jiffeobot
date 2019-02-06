const Discord = require("discord.js");



module.exports.run = async (bot, message, Args) => {
    message.delete(1000);
    var totalmember = 0;
    var start = 0;
    var members = [];
    var Global_Message = new Discord.RichEmbed()
        .setColor("ff7f50")
        .setTitle("Information")
        .addField("info : ", `Hey, J'espère que tu vas bien!!\n
        Je viens t'informer du lancement d'une nouvelle plateforme de live video streaming nouvelle génération Jiffeo.
        Nous sommes en train de créer un discord pour son lancement, je t'invite à le rejoindre pour en savoir un peu plus, et co-créer avec nous l'avenir de JIFFEO
        À bientôt  :smiley: sur le serveur de lancement JIFFEO`)
        .addField("Lien discord : ", "https://www.discord.me/jiffeo")
        .setTimestamp();
    message.guild.members.forEach(member => {
        //setTimeout(function(){
           // if (member.id != bot.user.id && !member.user.bot)
            //{ member.send(Global_Message); console.log("message envoyer à"+ member.username );}
        //}, 30000);
        members.push(member);

            
            
    });
    console.log(members);
    totalmember = members.length;
    setInterval(() => {
        if(start == totalmember){ return;}
        var name = members[start].user.username
        var ID = members[start].user.id
        if (ID != bot.user.id && !members[start].user.bot)
        {  members[start].send(Global_Message); console.log("message envoyer à "+ name );}
        start = start + 1;

    }, 30000);
}


    



module.exports.help = {
    name: "global"
}