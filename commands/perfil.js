  
const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('c!'))return;  

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'Nenhum'
    if(vip === true) vip = 'Bronze'

  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'
  
  const member = message.mentions.members.first() || message.guild.member(args[0]) || message.member;
  
  let moneyEmbed = new Discord.RichEmbed()
  .setColor("#4a2496")
  .setThumbnail(`${member.user.displayAvatarURL}`)
  .setDescription(`**${user} Perfil**\n\nCarteira: **${money}**\nBanco: **${bank}**\nRank Vip: **${vip}**\n\n**Inventário**\n\nCaixas: **${shoes}**\nChaves: **${newcar}**\nProstitutas: **${newhouse}**`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"perfil",
  aliases: ["pro"]
}