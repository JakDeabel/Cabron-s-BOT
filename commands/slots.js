const slotItems = [":watermelon:", ":pear:", ":tangerine:", ":green_apple:", ":apple:", ":cherries: ", ":pineapple:"];
const db = require("quick.db");
const Discord = require('discord.js');
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('c!'))return;  
  
  const member = message.mentions.members.first() || message.guild.member(args[0]) || message.member;

    let user = message.author;
    let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;
  
  let author = await db.fetch(`work_{message.guild.id}_${user.id}`)
  
  let timeout = 30000;

    let moneymore = new Discord.RichEmbed()
    .setColor("#4a2496")
    .setDescription(`<a:702223671066099812:711253483067801631>| Não tens essa quantidade de Rubies.`);

    let moneyhelp = new Discord.RichEmbed()
    .setColor("#4a2496")
    .setDescription(`<a:702223671066099812:711253483067801631>| Indica uma quantidade para apostar.`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[2] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
  
  if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.RichEmbed()
        .setColor("#4a2496")
        .setDescription(`<a:702223671066099812:711253483067801631> Podes voltar a apostar em ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {
        
    if (win) {
        let slotsEmbed1 = new Discord.RichEmbed()
            .setDescription(`${slotItems[number[2]]} | ${slotItems[number[1]]} | ${slotItems[number[0]]}\n\nGanhaste **${money}** <:image:735338033183981628> Rubies`)
            .setColor("#4a2496")
            .setThumbnail(`${member.user.displayAvatarURL}`)
        message.channel.send(slotsEmbed1)
        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.RichEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nPerdeste ** ${money}** <:image:735338033183981628> Rubies`)
            .setColor("#4a2496")
            .setThumbnail(`${member.user.displayAvatarURL}`)
        message.channel.send(slotsEmbed)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }

}
  }
  
  
  module.exports.help = {
    name:"slots",
    aliases: ["sl"]
  }