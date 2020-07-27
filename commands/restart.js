const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  
  
const owner = "318149637964038144";
    if (message.author.id === owner) {
        message.channel.send(`<a:6181_check:734253564746137620>| Ok, ${message.author}, Vou reiniciar....`);
        message.channel.send(`A fechar pastas...`)
        setTimeout(() => {
            process.exit(0);
        }, 5000); 
    } else {
        return message.channel.send("<a:702223671066099812:711253483067801631>| Você não tem permissão para reiniciar o bot.");
        }
    }

module.exports.help = {
    name:"restart",
    aliases: ["restart"],
    permlevel: 10
  }
