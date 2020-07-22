const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('c!'))return;  


    let embed = new Discord.RichEmbed()
    .setTitle("Cabron Junior [Prefixo `c!`]")
    .addField("Comandos de Economia", "`work` `rubies` `perfil` `retirar` `depositar` `daily` `loja` `buy`")
    .addField("Comandos de Apostas", "`roleta` `slots`")
    .setColor("#4a2496")
    message.channel.send(embed)




}

module.exports.help = {
  name:"ajuda",
  aliases: ["help"]
}