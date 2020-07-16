const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = (client, message, args) => {
  
   if(!message.member.roles.has('709515494633504798') && !message.member.roles.has('709515494633504798')) {    
}
  
  const canal = client.channels.get("709968517981798504");

  
  const sayMessage = args.join(" ");
      message.delete().catch();
      
  const embed = new Discord.RichEmbed()  
    .setTitle('<:4015_my_verified_emoji:710118751936184361> Nova parceria oficial do Cabrons!')
    .setDescription(`${sayMessage}`)
    .setColor('#4a2496')
    .setFooter('© Cabrons - Parcerias')
  canal.send(embed);

  message.channel.send("@everyone")
  message.delete().catch();
     
}
          
module.exports.command = {
    name: 'partnership',
    description: 'Faz um anúncio dep arceria.',
    category: "admin",
    usage: ['partner'],
    enabled: true
}