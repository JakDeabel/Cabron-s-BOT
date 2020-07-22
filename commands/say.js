const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.roles.has('709515494633504798') && !message.member.roles.has('709515494633504798')) {    
}
  
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
}

module.exports.help = {
    name:"say",
    aliases: ["dizer"],
    permlevel: 10
  }