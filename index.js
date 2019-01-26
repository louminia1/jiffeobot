const Discord = require('discord.js');
const config = require("./Modules/Utils/Config.json")
const fs = require("fs");
const STF = require("./Modules/Utils/Staff.json");
const bot = new Discord.Client({disableEveryone : true});
const prefix = ("!!")
const AFF = require("./Modules/Utils/Affichage.json")
bot.commands = new Discord.Collection();
let cooldown_coins = new Set();
let scds_coins = 350;
const mongoose = require('mongoose');

//Data Init

// DB Config
const db = require('./Modules/Utils/keys').MongoURI;
// Mongoose Connect
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
//Model Mongodb
//const Money = require("./Modules/Model/Money.js")
//const infoMP = require("./Modules/Model/Vague.js")
//const CFG = require("./Modules/Model/config.js")

bot.on("ready", async () => {
  console.log(" ");
  console.log(`Logged in as ${bot.user.tag}!`);
  console.log(`Nombre de serveur: ${bot.guilds.size} Installer `);
  console.log(" ");
  console.log("----------");
  console.log(" ");
  console.log(bot.guilds.map(r => r.name + ` | **${r.memberCount}** members (Jifféo Familly)`));
  console.log(" ");
  
  console.log("----------");
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
    `help : ${prefix}help | ${bot.guilds.size} Serveur`,
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
    channel.sendMessage(`:tada: Bienvenue ${member.user.username} dans le serveur, passes un bon moment ici:tada:`);
  }

  if(member.guild.id == "509790078969839628"){
    const role = member.guild.roles.find("name", "Membre de Jiffeo");
    member.addRole(role);
  }

bot.on('guildMemberRemove', member => {
  message.author.sendMessage(`:frowning2: ${member.user.username} a quitté le serveur :( `);
  })


  // commande 

bot.on("message", async message => { 
  let msgarray = message.content.split(" ");
  let cmd = msgarray[0];
  let Args = msgarray.slice(1);

  let commandefile = bot.commands.get(cmd.slice(prefix.length));
  if(commandefile) commandefile.run(bot,message,Args);



})
 
function Filtre(message){

}



bot.login(config.Token);
