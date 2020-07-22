const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('c!'))return;  

  let user = message.author;

  function isOdd(num) { 
	if ((num % 2) == 0) return false;
	else if ((num % 2) == 1) return true;
}
    
let colour = args[0];
let money = parseInt(args[1]);
let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)

let random = Math.floor(Math.random() * 37);

let moneyhelp = new Discord.RichEmbed()
.setColor("#4a2496")
.setDescription(`<a:702223671066099812:711253483067801631>| Indica uma quantia para apostar | c!rouleta <cor> <quantia>`);

let moneymore = new Discord.RichEmbed()
.setColor("#4a2496")
.setDescription(`<a:702223671066099812:711253483067801631>| Você não tem essa quantia para apostar.`);

let colorbad = new Discord.RichEmbed()
.setColor("#4a2496")
.setDescription(`<a:702223671066099812:711253483067801631>| Indica uma cor para apostar | Vermelho [1.5x] Preto [2x] Verde [15x]`);


    if (!colour)  return message.channel.send(colorbad);
    colour = colour.toLowerCase()
    if (!money) return message.channel.send(moneyhelp); 
    if (money > moneydb) return message.channel.send(moneymore);
    
    if (colour == "b" || colour.includes("preto")) colour = 0;
    else if (colour == "r" || colour.includes("vermelho")) colour = 1;
    else if (colour == "g" || colour.includes("verde")) colour = 2;
    else return message.channel.send(colorbad);
    
    
    
    if (random == 0 && colour == 2) { // Green
        money *= 15
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed1 = new Discord.RichEmbed()
        .setColor("#4a2496")
        .setDescription(`:green_square: | Ganhaste **${money}** <:5648_ruby_logo:734250477822279732> Rubies\n\nMultiplier: 15x`);
        message.channel.send(moneyEmbed1)
        console.log(`${message.author.tag} Won ${money} on green`)
    } else if (isOdd(random) && colour == 1) { // Red
        money = parseInt(money * 1.5)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed2 = new Discord.RichEmbed()
        .setColor("#4a2496")
        .setDescription(`:small_red_triangle:| Ganhaste **${money}** <:5648_ruby_logo:734250477822279732> Rubies\n\nMultiplier: 1.5x`);
        message.channel.send(moneyEmbed2)
    } else if (!isOdd(random) && colour == 0) { // Black
        money = parseInt(money * 2)
        db.add(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed3 = new Discord.RichEmbed()
        .setColor("#4a2496")
        .setDescription(`:black_medium_small_square: | Ganhaste **${money}** <:5648_ruby_logo:734250477822279732> Rubies\n\nMultiplier: 2x`);
        message.channel.send(moneyEmbed3)
    } else { // Wrong
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
        let moneyEmbed4 = new Discord.RichEmbed()
        .setColor("#4a2496")
        .setDescription(`<a:702223671066099812:711253483067801631>| Perdeste **${money}** <:5648_ruby_logo:734250477822279732> Rubies\n\nMultiplier: 0x`);
        message.channel.send(moneyEmbed4)
    }
}

  
  module.exports.help = {
    name:"roleta",
    aliases: ["roul"]
  }