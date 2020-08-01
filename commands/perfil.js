  
const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  message.channel.send('Sistema de Economia em manutenção!')
  
}
module.exports.help = {
  name:"perfil",
  aliases: ["pro"]
}