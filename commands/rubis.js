const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, utils) => {
  if(!message.content.startsWith('c!'))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setDescription(`**${user}' <:image:735338033183981628>| Rubies**\n\n<:image1:735341355730993163> Carteira: ${bal}\n:bank: Banco: ${bank}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"rubies",
  aliases: ["bal"]
}