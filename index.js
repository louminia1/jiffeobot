const Discord = require('discord.js');
const config = require("./Modules/Utils/Config.json")
const fs = require("fs");
const STF = require("./Modules/Utils/Staff.json");
const bot = new Discord.Client({disableEveryone : true});
const prefix = ("!!")
//const WS = require('./ws/ws.js')
const AFF = require("./Modules/Utils/Affichage.json")
bot.commands = new Discord.Collection();
let cooldown_coins = new Set();
let scds_coins = 350;
const mongoose = require('mongoose');

//var ws = new WS('123', 9000, bot)

//Data Init

// DB Config
const db = require('./Modules/Utils/keys').MongoURI;
// Mongoose Connect
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));
//Model Mongodb
const Money = require("./Modules/Model/Money.js")
const infoMP = require("./Modules/Model/Vague.js")

bot.on("ready", async () => {
  let bot_status = "dnd"
  let i = 0
  console.log(" ");
  bot.user.setStatus(bot_status);
  console.log(`Logged in as ${bot.user.tag}!`);
  console.log(`Nombre de serveur: ${bot.guilds.size} Installer `);
  //console.log(`${bot.guild.id}`);
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
  let status = [
    "[          ]",
    "[=         ]",
    "[==        ]",
    "[===       ]",
    "[====      ]",
    "[=====     ]",
    "[======    ]",
    "[=======   ]",
    "[========  ]",
    "[========= ]",
    "[==========]",
  ]
  setInterval(function() {
    if(status[i] === "[          ]" || status[i] === "[=         ]" || status[i] === "[==        ]" || status[i] === "[===       ]" || status[i] === "[====      ]" || status[i] === "[=====     ]" || status[i] === "[======    ]" || status[i] === "[=======   ]" || status[i] === "[========  ]" || status[i] === "[========= ]" || status[i] === "[==========]"){
      i = i + 1
      if (i > 11){
        return;
      }else if(status[i] === "[==========]"){
        bot.user.setStatus("online");
      }else if(i < 11){
        bot.user.setActivity(status[i], {type: "WATCHING"});
      }
    }
  }, 3000);

  let Statuses = [
    `help : ${prefix}help | ${bot.guilds.size} Serveur`,
    `${bot.user.tag}`,
    'https://jiffeo.tv/'
  ]

  setInterval(function() {
    let status = Statuses[Math.floor(Math.random() * Statuses.length)];
    bot.user.setActivity(status, {type: "WATCHING"});
  }, 30000);

  setInterval(function(){
    var date = new Date();
    var Combien = date.getDate();
    var mois = date.getMonth();
    var seconds = date.getSeconds();
    var jour = date.getDay();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    if(jour === 1){
      var Jours = "Lundi"
    };
    if(jour === 2){
      var Jours = "Mardi"
    };
    if(jour === 3){
      var Jours = "Mercredi"
    };
    if(jour === 4){
      var Jours = "Jeudi"
    };
    if(jour === 5){
      var Jours = "Vendredi"
    };
    if(jour === 6){
      var Jours = "Samedi"
    };
    if(jour === 7){
      var Jours = "Dimanche"
    };
    Timer(Combien, mois, seconds, heure, Jours, minutes);
    Chan(heure, minutes, seconds);
  }, 500)
});





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
  var serv = member.guild.id
  if(serv !== "509790078969839628"){
    var bienvenue_embed = new Discord.RichEmbed()
        .setColor("ff00e8")
        .setTitle("Bienvenue sur jiffeo")
        .setThumbnail(`${message.author.displayAvatarURL}`)
        .addField("Message ", "Hey, bienvenue sur le server Jiffeo, tu peux regarder ou lancer des Lives. Le CEO de jiffeo t'a fait une petite video de Presentation la voila ! :smiley:Hey ")
        .addField("Vidéo explication", "https://www.youtube.com/watch?v=ej35UbHKksU&feature=youtu.be")
        .setTimestamp()
    member.author.send(bienvenue_embed)

  }
  const channel = member.guild.channels.find("name", "général");
  const role = member.guild.roles.find("name", "Membre de Jiffeo");
  if(!channel)return;
  channel.sendMessage(`:tada: Bienvenue ${member.user.username} dans le serveur, passes un bon moment ici:tada:`);
  member.addRole(role);
  })

bot.on('guildMemberRemove', member => {
  message.author.sendMessage(`:frowning2: ${member.user.username} a quitté le serveur :( `);
  })
bot.on("messageDelete", async message => {
 console.log('Le message delete')
})

bot.on("message", async message => { 
  let msgarray = message.content.split(" ");
  let cmd = msgarray[0];
  let Args = msgarray.slice(1);

  let commandefile = bot.commands.get(cmd.slice(prefix.length));
  if(commandefile) commandefile.run(bot,message,Args);

})
 

function Timer(Combien, mois, seconds, heure, Jours, minutes){
  
};
function Chan(Combien, mois, seconds, heure, Jours, minutes){
};
setTimeout(() => {
  cooldown_coins.delete(message.author.id)
}, scds_coins * 1000);

bot.login(config.Token);
