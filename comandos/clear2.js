const Discord = require("discord.js");

module.exports.run = async (bot, message, args, messages) => {
  const deleteCount = parseInt(args[0], 10);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não.");
  if (!args[0] || args[0 == "help"]) return message.reply(`Por favor use: /clear <número>"`);

  if (!deleteCount || deleteCount < 2 || deleteCount > 100) return message.reply("<a:702223671066099812:711253483067801631> **|** Poing... oing... Você não especificou um número entre 2 e 100 para eliminar.");

  const fetched = await message.channel.messages.fetch({ limit: deleteCount });
  message.channel.bulkDelete(fetched).catch(error =>message.reply(`<a:702223671066099812:711253483067801631>**|** Poing... oing... Não posso remover as mensagens pelo seguinte erro: ${error}`));

  let purgeEmbed = new Discord.MessageEmbed()
    .setAuthor("♻️ Ação | Limpar Mensagens")
    .setColor("#4a2496")
    .addField("Quem limpou", `<@${message.author.id}>`)
    .addField("Limpeza", `${args[0]}`)
    .addField("Deletadas", `${args[0]}`)
    .setFooter("Cabrons-Logs", bot.user.displayAvatarURL);

  let purgeChannel = message.guild.channels.cache.get('710950763614175273');
  if (!purgeChannel) return message.channel.send("<a:702223671066099812:711253483067801631> **|** Poing... oing... Não encontrei o canal mod-logs.");

  purgeChannel.send(purgeEmbed);
};

module.exports.command = {
  name: "purge",
  description: "Faz delete a certas mensagens.",
  category: "admin",
  usage: ["<número>"],
  enabled: true,
  permlevel: 3
};