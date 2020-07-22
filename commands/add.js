const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('c!'))return;  
  let ownerID = ('318149637964038144')
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#4a2496")
    .setDescription(`<a:6181_check:734253564746137620> Deu ${args[1]} <:5648_ruby_logo:734250477822279732> Rubies\n\nAgora tens: **${bal}**`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
  name:"adicionar",
  aliases: ["am"]
}