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

bot.on("message", async message => { 

  if(message.content == prefix + "Liste"){
    message.delete(1000)
    message.author.createDM().then (channel => {
      let Lis = bot.users.size
      var List_embed = new Discord.RichEmbed()
        .setColor("ff9000")
        .addField("Liste :󠂪󠂪 ", `${Lis} Users`)
    message.channel.sendMessage(List_embed).then ( message => {message.delete(15000)});
    })
  }

  if(message.content == prefix + "générate"){
    message.delete(500)
    message.guild.members.forEach(member => {
      var defaulte = false;
      var pseudo = member.user.username
      var ID = member.id
      infoMP.findOne({
        userID: ID,
        }, (err, infomp) =>{
          if(err) console.log(err);
          if(!infomp){
            console.log(pseudo + " create")
            const newvmp = new infoMP({
           userID: ID,
           vague: defaulte
          })
        newvmp.save().catch(err => console.log(err)) 
        }else{
          console.log(pseudo + " deja create")
        }})
    })
   }

   if(message.content == prefix + "invite"){
     message.delete(1000)
     message.reply("https://discordapp.com/api/oauth2/authorize?client_id=525017193113452545&permissions=8&scope=bot")
   }
    
  


   if(message.content == prefix + "global"){
    message.delete(1000)
    let text = message.content.slice('!!global'.length);
    var Global_Message = new Discord.RichEmbed()
        .setColor("ff7f50")
        .setTitle("Information")
        .addField("info : ", `Hey,
        J'espère que tu vas bien!! Je viens t'informer du lancement d'une nouvelle plateforme de live video streaming nouvelle génération Jiffeo . Nous sommes en train de créer un discord pour son lancement, je t'invite à le rejoindre pour en savoir un peu plus, et co-créer avec nous l'avenir de JIFFEO
        À bientôt  :smiley: sur le serveur de lancement JIFFEO`)
        .addField("Lien discord : ", "https://www.discord.me/jiffeo")
        .setTimestamp()
    message.guild.members.forEach(member => {
          if (member.id != bot.user.id && !member.user.bot) member.send(Global_Message).then ( message => { message.delete(1800000)})
        console.log(`Message envoyer à ${member.user.username}`)
    })
    }

    

});
  
 // if(message.author.bot) return;
  /*
  let msgarray = message.content.split(" ");
  let cmd = msgarray[0];
  let Args = msgarray.slice(1);
  let msgauthor = message.author.id
  let codage = message.guild.id*/

/*
  if (message.content.startsWith(prefix)){
    message.delete(5000)
    /*if(codage !== "527263112664055826"){
    var Maintenance_embed = new Discord.RichEmbed()
        .setColor("ff00e8")
        .setTitle("Jiffeo Maintenance")
        .addField("Information :", "Le bot et fermée pour maintenance, désoler pour cette gêne occasionnée")
        .setTimestamp()
        message.reply(Maintenance_embed).then (m => m.delete(10000));
  let commandefile = bot.commands.get(cmd.slice(prefix.length));
  if(commandefile) commandefile.run(bot,message,Args);
    }else{
      let commandefile = bot.commands.get(cmd.slice(prefix.length));
      if(commandefile) commandefile.run(bot,message,Args);
    }

  if(!message.content.startsWith(prefix)){
    if(cooldown_coins.has(message.author.id)){
      return;
    }else{
      let name = message.author.username
      let serv = message.guild.name
      let coin = 1;
      console.log("+ "+ coin + " Coins pour " + name + "#"+message.author.discriminator + " ( "+serv+" )")
      cooldown_coins.add(message.author.id)
      Money.findOne({
      userID: message.author.id,
  }, (err, money) =>{
    if(err) console.log(err);
      if(!money){
        cooldown_coins.add(message.author.id)
        const newMoney = new Money({
         userID: message.author.id,
          coins: coin
        })
      newMoney.save().catch(err => console.log(err)) 
    }else{
      money.coins = money.coins + coin;
      money.save()
    }
  })
    }
  }
*/

  
  





  

               
                  
  

//Data beans

//if(message.author.bot)return;



/*
*/
/*
if(message.content === prefix + "test"){ 
  var guilds = bot.guilds;
    for(var i = 0; i< bot.guilds.size;  i++){
      console.log(guilds[i])
      //for(var y = 0; i < bot.guilds[i].memberCount ; y++){
        //var name = bot.guilds[i].member[y].name
        //console.log(`Message pour`)
        //console.log(`Message pour ${name} serveur (${serveur}) ( ${nombre} sur ${nombre_max})`)
      //}
    }
  }*/
  

    /*message.guild.members.forEach(member => {
      var nombre_max = member.user.size
      var nombre = 0;
      var name = member.displayName
      console.log(`Message pour ${name} serveur (${serveur}) ( ${nombre} sur ${nombre_max})`)
      var nombre = nombre + 1
    })*/
/*
    if(message.content == prefix + "Activer"){
      message.delete(5000)
      var pseudo = message.author.username
      var pseudo_id = message.author.id
      var serveur = message.guild.name
      console.log(`Le serveur ${serveur} a était activer. Par ${pseudo} id ${pseudo_id}`)
      message.channel.send(`Bravo ${pseudo}. Le serveur ${serveur} a gagné 100 Jours du Serveur Golden. Le pack sera Activé dès l'ouverture du Bot`).then ( msg => msg.delete(10000))
    }
    if(message.content == prefix + "Info"){
      message.delete(1000)
      var info_Commands = new Discord.RichEmbed()
      .setColor("ff7f50")
      .setTitle("Information Bot")
      .addField("Information", "Bonsoir, je vous informe pour une offre limitée, le pack golden 50EUR/annuel. L'offre dure 2H. le pack peut être offert pendant 200Jours, il suffit d'héberger le bot sur votre discord puis faire la commande !!Activer, une fois que le bot répondra cela enverra un message et votre serveur sera retenu. Quand le message sera supprimé l'offre sera arreter. Je vous souhaite une bonne fin de journée. ")
      .addField("Attention", "toutes personnes faisant plusieurs fois la même commande, le pack sera annulé. Pour plus d'info contacter Louminia#9339")
      .addField("Lien du bot", "https://discordapp.com/api/oauth2/authorize?client_id=525017193113452545&permissions=8&scope=bot")
      .setTimestamp()
      message.channel.send(info_Commands).then ( message => { message.delete(7200000)})
      /*7200000
    }*/
  


/*
if (message.content === prefix + "beans"){
    var coins = db.get("coins").filter({user: msgauthor}).find('coins').value()
    var coinsfinal = Object.values(coins);
    var beans_embed = new Discord.RichEmbed()
    .setTitle(`**__Coins de ${message.author.username}__**󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪󠂪󠂪`)
    .setDescription("Voici tes Beans :D")
    .addField("Beans : ", `${coinsfinal[1]} $Beans`)
    .setThumbnail("https://cdn.discordapp.com/attachments/484791265704148994/534703618289303582/beans-small.png") 
    .setColor("ff7a00")
    .setFooter("Jiffeo", "https://cdn.discordapp.com/attachments/484791265704148994/534703618289303583/Calque_2.png")
  message.channel.sendMessage(beans_embed);
  message.delete();
}

if(message.content === prefix + "Inscrit"){
  let serv_id = message.guild.id
  let serv_name = message.guild.name
  let serv_nombre = message.guild.memberCount
  let serv_ban = "false"
  message.delete(5000)

  if (!db.get("serv").find({serveur_id: serv_id,serveur_name: serv_name,serveur_count: serv_nombre,serveur_ban: serv_ban}).value()){
    db.get("serv").push({serveur_id: serv_id, serveur_name: serv_name,serveur_count: serv_nombre,serveur_ban: serv_ban}).write();
    message.channel.send(`le serveur ${serv_name} a bien êtait validée`).then (message => message.delete(15000))
  }else{
    db.get("serv").filter({serveur_id: serv_id, serveur_name: serv_name,serveur_count: serv_nombre,serveur_ban: serv_ban}).find('serv').value();
    message.channel.send(`le serveur ${serv_name} à deja etait validée`).then (message => message.delete(15000))
}
}

if(message.content === prefix + "BlackList"){
  message.delete(10000)
  message.guild.members.forEach(member => {
    if (member.id != bot.user.id && !member.user.bot){
    let user_name = member.displayName
    let userban = "false"
    if (!db.get("notif").find({name_user: user_name,id_name: user_id,user_ban: userban}).value()){
      db.get("notif").push({name_user: user_name, id_name: user_id,user_ban: userban}).write();
    }else{
      db.get("notif").filter({name_user: user_name, id_name: user_id,user_ban: userban}).find('notif').value();
  }
}
  });
}
*/
/*

  if(message.content === prefix + "notif on"){
    var name_id = message.author.id
    message.delete(5000)
    var info = 2
    if (!db.get("notif").find({identifiant: name_id,status: info}).value()){
      db.get("notif").push({identifiant: name_id,status: info}).write();
    }
    var userstatussdb = db.get("notif").filter({identifiant: name_id}).find('status').value();
    var userstatus = Object.values(userstatussdb)
  db.get("notif").find({identifiant: name_id}).assign({identifiant: name_id,status: userstatus[1] = 1}).write()
  message.reply("Vous avait activé les notification").then ( message => { message.delete(5000)})
}


if(message.content === prefix + "notif off") {
  var name_id = message.author.id
  message.delete(5000)
  var info = 1
  if (!db.get("notif").find({identifiant: name_id,status: info}).value()){
    db.get("notif").push({identifiant: name_id,status: info}).write();
  }
  var userstatussdb = db.get("notif").filter({identifiant: name_id}).find('status').value();
  var userstatus = Object.values(userstatussdb)


  

  db.get("notif").find({identifiant: name_id}).assign({identifiant: name_id,status: userstatus[1] = 2}).write()
  message.reply("Vous avait desactiver les notification").then ( message => { message.delete(5000)})
}
*/

/*
if(message.content === prefix + "global"){
  message.delete(1000)
    var Global_Message = new Discord.RichEmbed()
        .setColor("ff7f50")
        .setTitle("Information")
        .addField("info : ", `${Args[0]}`)
        .addField("Lien discord : ", "https://www.discord.me/jiffeo")
        .addField("Lien Web : ", "https://jiffeo.tv/")
        .setTimestamp()

    message.guild.members.forEach(member => {
      if (member.id != bot.user.id && !member.user.bot){
        var peudo = member.displayName
        var name_id = member.id

        if (!db.get("notif").find({identifiant: name_id}).value()){
            db.get("notif").push({identifiant: name_id,status: 1}).write();
        }else{
            var stat = db.get("notif").filter({identifiant: name_id}).find('status').value();
            var statinfo = Object.values(stat)
            console.log(peudo + " : " + statinfo[1])

            if(statinfo[1] !== "1" ){//activer 
              console.log(` Message envoyer à ${peudo}`)
              member.send(Global_Message).then ( message => { message.delete(7000)})
            }else if(statinfo[1] !== "2"){//desactiver 
              console.log(`Message bloquer pour ${peudo}`)
              return;
            }
          }
        }
        

    });
}*/



/* Ping

//if(message.content === "!!ping"){}
    

//if(message.content === "!!Liste"){}
// insulte
if(message.content.includes("tg") || message.content.includes("tageul") || message.content.includes("Batard") || message.content.includes("Salope") || message.content.includes("tageul")){
  message.delete(2000)
  message.reply(`Merci de pas insulter !`).then ( message => { message.delete(50000)});
}

*/
//commandes pour rejoindre un channel vocal
 /* 
if (message.content === '!!join') {
  message.delete();
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
        message.reply(':white_check_mark: Connecté avec succès !');
      })
      .catch(console.log);
  } else {
    message.reply(':x: Tu dois être dans un salon vocal pour effectuer la commande join !');
    message.delete();
  }
}

if (message.content === '!!leave') {
  message.delete();
  if (message.member.voiceChannel) {
    message.channel.sendMessage(message.author + ':white_check_mark: Déconnecté avec succès !')
    message.member.voiceChannel.leave()

  } else {
    message.reply(':x: Tu dois être dans un salon vocal pour effectuer la commande leave !');
    message.delete();
  }
}*/
//Liste 
//commandes pour la musique
/*
const voiceChannel = message.member.voiceChannel;

          if (message.content.startsWith("!!play")) {
          if (!voiceChannel){
              return message.channel.sendMessage("Tu dois être dans un salon vocal pour effectuer cette commande.");
          }
  
          if (args === ""){
              message.reply('Tu dois mettre un lien Youtube pour que la vidéo commence.');
              console.log('message non envoyé');
          }
          else {
              if (message.content.includes("http://") || message.content.includes("https://")) {
                  if (message.content.includes("youtube") || message.content.includes("youtu.be")) {
  
                      message.channel.sendMessage(":white_check_mark: **Connecté, Veulliez patienter la musique va se lancer dans quelques secondes**");
                      voiceChannel.join()
                      .then(connection => {
                          const args = message.content.split(" ").slice(1);
                          let stream = yt(args.join(" "));
                          yt.getInfo(args.join(" "), function(err, info) {
                              const title = info.title
                              message.channel.sendMessage(`Musique en cours : ${title}`)
                          })
                          const dispatcher = connection.playStream(stream, {audioonly: true});
                          dispatcher.on('end', () => {
  
                              voiceChannel.leave();
                              message.channel.sendMessage('Musique terminée')
                          }).catch(e =>{
                              console.error(e);
                          });
                      })
                  } else {
                      message.reply('Seulement les liens Youtube sont autorisés');
                  }
              } else {
                  message.reply('Seulement les liens Youtube sont autorisés');
              }
          }
        }
        */
 

function Timer(Combien, mois, seconds, heure, Jours, minutes){
  
};
function Chan(Combien, mois, seconds, heure, Jours, minutes){
};
setTimeout(() => {
  cooldown_coins.delete(message.author.id)
}, scds_coins * 1000);

bot.login(config.Token);
