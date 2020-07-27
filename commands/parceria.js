const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = (bot, message, args) => {
  
  const owner = "340622268424126465";
   if (message.author.id === owner) {
  
  const canal = bot.channels.get("709968517981798504");

  const sayMessage = args.join(" ");
      message.delete().catch();
      
  const embed = (`**<:4015_my_verified_emoji:710118751936184361> Nova parceria oficial do Cabrons!**\n\n${sayMessage}\n\n**© Cabrons - Parcerias**`)
    
    

  canal.send(embed);

} else {
        return message.channel.send("<a:702223671066099812:711253483067801631>| Você não tem permissão para utilizar esse comando.");
        }
     
}
          

module.exports.help = {
  name:"parceria",
  aliases: ["pc"]
}