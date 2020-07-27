const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('c!'))return;  

  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:702223671066099812:711253483067801631>| Menciona a pessoa que queres pagar.`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:702223671066099812:711253483067801631>| Indica uma quantidade que queres pagar.`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:702223671066099812:711253483067801631>| Não podes pagar rubies negativos.`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:702223671066099812:711253483067801631>| Não tens essa quantidade de rubies.`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`<a:6181_check:734253564746137620>| Você pagou ao ${user.user.username} **${args[1]}** <:image:735338033183981628> Rubies`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
  name:"pagar",
  aliases: ["pay"]
}