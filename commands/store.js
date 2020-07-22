
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('c!'))return;  


    let embed = new Discord.RichEmbed()
    .setDescription("**Rank VIP**\n\n:orange_book:| Bronze: **3500** Rubies [``c!comprar bronze``]\n\n**Items Extravagantes**\n\n:ring:| Joias: **600** Rubies [``c!comprar joia``]\n:red_car:| Carros: **800** Rubies[c!comprar carro]\n:woman_singer:| Putas: **1200** Rubies[``c!compra:red_car:|r puta``]")
    .setColor("#4a2496")
    message.channel.send(embed)




}


module.exports.help = {
  name:"loja",
  aliases: ["st"]
}