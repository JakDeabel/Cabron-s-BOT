const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('c!'))return;  
  let ownerID = ('318149637964038144', '340622268424126465')
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.RichEmbed()
    .setColor("#4a2496")
    .setDescription(`Removeste ${args[1]} <:5648_ruby_logo:734250477822279732> Rubies\n\nAgora tem: **${bal}**`);
    message.channel.send(moneyEmbed)

};


module.exports.help = {
  name:"remover",
  aliases: ["rm"]
}