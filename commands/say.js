const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  const owner = "340622268424126465";
   if (message.author.id === owner) {
  
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
     
} else {
        return message.channel.send("<a:702223671066099812:711253483067801631>| Você não tem permissão para utilizar esse comando.");
        }
  }

module.exports.help = {
    name:"say",
    aliases: ["dizer"],
    permlevel: 10
  }