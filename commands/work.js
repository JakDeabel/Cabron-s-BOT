const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  message.channel.send('Sistema de Economia em manutenção!')
  
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}