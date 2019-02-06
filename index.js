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
let numberserveur = 10000

//Data Init

// DB Config
const db = require('./Modules/Utils/keys').MongoURI;
// Mongoose Connect
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

//Model Mongodb
const Money = require("./Modules/Model/Money.js")
//const infoMP = require("./Modules/Model/Vague.js")
const CFS = require("./Modules/Model/config.js")

bot.on("ready", async () => {
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
    //member.(`:tada: Bienvenue ${member.user.username} dans le serveur, passes un bon moment ici:tada:`);
  }

  if(member.guild.id == "509790078969839628"){
    const role = member.guild.roles.find("name", "Membre de Jiffeo");
    member.addRole(role);
  }


})

bot.on('guildMemberRemove', member => {
  console.log(member + "Vient de partir !")
});
bot.on('messageupdate', async(oldMessage, newMessage) =>{
 
})
bot.on('messageDelete', async message => {
  CFS.findOne({ bot_ID: message.guild.id}
    , (err, cfs) =>{
  if(err) console.log(err);
    if(cfs.bot_Log == " "){
      return;
    }else{
      let serveur = cfs.bot_Log
      let logs = bot.channels.get(serveur)
      var messagedelete_embed = new Discord.RichEmbed()
        .setColor("ff00e8")
        .setTitle("Jiffeo Logs")
        .setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setThumbnail(message.author.displayAvatarURL)
        .setDescription(":gear: Message deleted")
        .addField("Message", message.content, true)
        .setTimestamp()
      logs.send(messagedelete_embed)



    }
  })

})


  // commande 

bot.on("message", async message => { 
  //console.log(message);
  let guilde = message.channel.guild.id;
  let Sname = message.name;
  let id = message.author.id;

if(message.content){
  if(cooldown_coins.has(message.author.id)){ return;}
    Money.findOne({userID: message.author.id}
      , (err, money) => {
      if(err) console.log(err);
      if(!money){
          const newMoney = new Money({
            userID: message.author.id,
            piece: 0
          })
          newMoney.save().catch(err => console.log(err));
          cooldown_coins.add(message.author.id)
          console.log("Porte Money crée pour "+message.author.username)
      }else{
          console.log("Porte Money de "+message.author.username+ ", Gagne 1 piece. Total : "+ money.piece+" Piece")
          money.piece = money.piece + 1
          money.save()
      }
    })
}


  if(message.content){
    CFS.findOne({
      bot_ID: guilde,
    }, (err, cfs) =>{
    if(err) console.log(err);
      if(!cfs){
        const newcfs = new CFS({
          bot_name: Sname,
          bot_ID: guilde,
          bot_Prefix: "!!",
          bot_Log: " ",
          bot_Error: " ",
          bot_Info: " ",
          bot_Pack: "Gratuit"
        })
      newcfs.save().catch(err => console.log(err))
      }
    })
    let msgarray = message.content.split(" ");
    let cmd = msgarray[0];
    let Args = msgarray.slice(1);
    CFS.findOne({bot_ID: guilde}, (err, cfs) => {
      if(err) console.log(err);
      if(cfs.bot_Prefix == " "){
        return;
      }else{
        let prefixe = cfs.bot_Prefix
        let commandefile = bot.commands.get(cmd.slice(prefixe.length));
        if(commandefile) commandefile.run(bot,message,Args);
      }
    })

  }
  setTimeout(() => {
    cooldown_coins.delete(message.author.id)
  }, scds_coins * 1000)
})





bot.login(config.Token);
