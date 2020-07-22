const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('c!'))return;  

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'tudo') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:6181_check:734253564746137620>| Você retirou **${money}** <:5648_ruby_logo:734250477822279732> Rubies do banco.`);
  message.channel.send(embed5)
  
  } else {
    
    if(isNaN(args[0])) return message.reply(" Por favor indique a quantidade de Rubies que quer retirar do banco.")

  let embed2 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:702223671066099812:711253483067801631>| Indica uma quantidade de Rubies para retirar do banco.`);
  
  if(args[0] < 1) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:702223671066099812:711253483067801631>| Você não pode retirar Rubies negativos.`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:702223671066099812:711253483067801631>| Você não tem essa quantidade de Rubies no banco para retirar.`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:6181_check:734253564746137620>| Você retirou **${args[0]}** <:5648_ruby_logo:734250477822279732> Rubies do banco.`);

  message.channel.send(embed5)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  }
}


module.exports.help = {
  name:"retirar",
  aliases: ["wd"]
}