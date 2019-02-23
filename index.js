const Discord = require('discord.js');
const config = require("./Modules/Utils/Config.json")
const fs = require("fs");
const STF = require("./Modules/Utils/Staff.json");
const bot = new Discord.Client({disableEveryone : true});
const prefix = ("!!")
const AFF = require("./Modules/Utils/Affichage.json")
//const antispam = require('discord-anti-spam');
bot.commands = new Discord.Collection();
let cooldown_coins = new Set();
let scds_coins = 350;
const mongoose = require('mongoose');
const xp_used = false;
let numberserveur = 10000

//Data Init

// DB Config
const db = require('./Modules/Utils/keys').MongoURI;
// Mongoose Connect
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Model Mongodb
const xp = require("./Modules/Model/xp")

bot.on("ready", async () => {
	/*antispam(bot, {
    warnBuffer: 4, // Maximum ammount of messages allowed to send in the interval time before getting warned.
    maxBuffer: 6, // Maximum amount of messages allowed to send in the interval time before getting banned.
    interval: 2000, // Amount of time in ms users can send the maxim amount of messages(maxBuffer) before getting banned. 
    warningMessage: "S'il vous plait, arrêtez de spam !", // Message users receive when warned. (message starts with '@User, ' so you only need to input continue of it.) 
    banMessage: "a été banni pour spam !", // Message sent in chat when user is banned. (message starts with '@User, ' so you only need to input continue of it.) 
    maxDuplicatesWarning: 5,// Maximum amount of duplicate messages a user can send in a timespan before getting warned.
    maxDuplicatesBan: 7, // Maximum amount of duplicate messages a user can send in a timespan before getting banned.
    deleteMessagesAfterBanForPastDays: 7, // Deletes the message history of the banned user in x days.
  });*/
  console.log(" ");
  console.log(`Logged in as ${bot.user.tag}!`);
  console.log(`Nombre de serveur: ${bot.guilds.size} Installer `);
  console.log(`Nombre de users: ${bot.users.size} Installer `);
  console.log(" ");
  console.log("----------");
  console.log(" ");
  console.log(bot.guilds.map(r => r.name + ` | **${r.memberCount}** members (Jifféo Familly)`));
  //let guilde = bot.guilds.filter(g => g.memberCount <= 500).map(g => g.name);
  

  console.log(" ");
  console.log(AFF.AFCH1);
  console.log(AFF.AFCH2);
  console.log(AFF.AFCH3);
  console.log(AFF.AFCH4);
  console.log(AFF.AFCH5);
  console.log(AFF.AFCH6);
  console.log(" ");
  console.log("----------");
  let Statuses = [
    `help : ${prefix}help | ${bot.guilds.size} Serveurs`,
    `${bot.user.tag}`,
    'https://jiffeo.tv/'
  ]

  setInterval(function() {
    let status = Statuses[Math.floor(Math.random() * Statuses.length)];
    bot.user.setActivity(status, {type: "WATCHING"});
  }, 30000);

});



//Load .js 

fs.readdir("./Modules/Commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Commande non trouver.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./Modules/Commands/${f}`);
    console.log(`Plugin : ${f} Activer !`);
    bot.commands.set(props.help.name, props);
  })
})


bot.on('guildMemberAdd', member => {

  if(member.guild.id == "509790078969839628"){
    const channel = member.guild.channels.find("name", "accυeil-general-🔆");
    if(!channel) return;
    channel.send(`Bienvenue ${member} sur le serveur Jiffeo.tv, passes un bon moment ici :D`)
    member.send(`Hey,\nJ'ai fais une petite vidéo pour te présenter le Discord Jiffeo voilà le lien encore bienvenue :smiley: https://www.youtube.com/watch?v=ej35UbHKksU&feature=youtu.be\nLe lien vers la plateforme de live video https://jiffeo.tv/ et l'app Jiffeo https://play.google.com/store/apps/details?id=com.jiffeo.app\nÀ bientôt sur le serveur Jiffeo.tv :D\nOlomi`)
    //member.(`:tada: Bienvenue ${member.user.username} dans le serveur, passes un bon moment ici:tada:`);
  }



})

bot.on('guildMemberRemove', member => {
  console.log(member + "Vient de partir !")
});
bot.on('messageupdate', async(oldMessage, newMessage) =>{
 
})
bot.on('messageDelete', async message => {
  

})


  // commande 

bot.on("message", async message => { 
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0]
  let Args = messageArray.slice(1)
  //console.log(message);


  if(message.content){
    var serveur = message.channel.guild.name
    var serveur_id = message.channel.guild.id
    var name = message.author.username
    var Message = message.content
    console.log(` `)
    console.log(`Serveur: ${serveur}(id: ${serveur_id})\nPseudo: ${name}\nMessage: ${Message}`)
    console.log(` `)
  }

  if(message.channel.guild.id = "509790078969839628"){
    if(message.author.bot) return;
  const insultes = ["suce","enculé","encule","baise","salope","connard","conard","pute","connasse","bitch","pd","nique","batard","bite","biatch","branleur","abruti","enculer","chier","couille","emmerdeur","putain","ptn","enfoiré","gueule","merde","poufiasse","raclure", "fdp"];
    if( insultes.some(word => message.content.includes(word)) ) {
        message.delete(2000);
        message.author.send('❌INSULTES INTERDITES').then ( msg => msg.delete(40000))
      }
  }

  if(message.content.startsWith(prefix)){
    let prefix = ("!!")
    let commandefile = bot.commands.get(cmd.slice(prefix.length));
    if(commandefile) commandefile.run(bot,message,Args);
      
    }

  if(message.content){
    if(message.channel.guild.id = "509790078969839628"){
      if(xp_used) return;
      else{
        xp.findOne({ID: message.author.id}, (err, xp) =>{
          if(err) console.log(err)
          if(!xp){
          const newxp = new xp({
            userID: message.author.id,
            xp_count: 0,
            level_count: 0,
          })
          newxp.save().catch(err => console.log(err))
        }else{
          xp.xp_count = xp_count + 1
          xp.save()
        }
        xp_used = true;
        setTimeout(() => {
          xp_used = false;
        }, 1000 * 30 )
        })
      }
    }
  }


  
})





bot.login(config.Token);
