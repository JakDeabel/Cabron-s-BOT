
const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('c!'))return;  


    let embed = new Discord.RichEmbed()
    .setDescription("**Rank VIP**\n\n:orange_book:| Senpai: **100.000** Rubies [``c!comprar bronze``]\n\n**Items Extravagantes**\n\n:ring:| Joias: **6.000** Rubies [``c!comprar joia``]\n:red_car:| Carros: **12.000** Rubies[``c!comprar carro``]\n:woman_singer:| Putas: **7.500** Rubies[``c!comprar puta``]")
    .setColor("#4a2496")
    message.channel.send(embed)




}


module.exports.help = {
  name:"loja",
  aliases: ["st"]
}