
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('c!'))return;  


    let embed = new Discord.RichEmbed()
    .setDescription("**Ranks VIP**\n\nBronze: <:5648_ruby_logo:734250477822279732> 3500 Rubies ``[c!comprar bronze]``")
    .setColor("#4a2496")
    message.channel.send(embed)




}


module.exports.help = {
  name:"loja",
  aliases: ["st"]
}