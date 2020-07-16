const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
}

module.exports.command = {
    name: 'say',
    description: 'Faz o bot dizer uma mensagem.',
    category: "outros",
    usage: 'say <mensagem>',
    enabled: true,
    permlevel: 10
}