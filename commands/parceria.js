const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = (bot, message, args) => {
  
   if(!message.member.roles.has('709515494633504798') && !message.member.roles.has('709515494633504798')) {    
}
  
  const canal = bot.channels.get("709968517981798504");

  const sayMessage = args.join(" ");
      message.delete().catch();
      
  const embed = (`**<:4015_my_verified_emoji:710118751936184361> Nova parceria oficial do Cabrons!**\n\n${sayMessage}\n\n**© Cabrons - Parcerias**`)
    
    

  canal.send(embed);


     
}
          

module.exports.help = {
  name:"parceria",
  aliases: ["pc"]
}