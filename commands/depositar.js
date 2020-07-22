const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("c!")) return;

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`);
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`);

  if (args[0] === "tudo") {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`);
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`);

    let embedbank = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        "<a:702223671066099812:711253483067801631>| Você não tem Rubies para depositar no banco."
      );

    if (money === 0) return message.channel.send(embedbank);

    db.add(`bank_${message.guild.id}_${user.id}`, money);
    db.subtract(`money_${message.guild.id}_${user.id}`, money);
    let embed5 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:6181_check:734253564746137620>| Você depositou **${money}** <:5648_ruby_logo:734250477822279732> Rubies no banco.`
      );
    message.channel.send(embed5);
  } else {
    if (isNaN(args[0]))
      return message.reply(
        " Por favor indique a quantidade de Rubies que quer depositar no banco."
      );

    let embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Indica uma quantidade de Rubies que queres depositar.`
      );

    if (args[0] < 1) {
      return message.channel.send(embed2).catch(err => console.log(err));
    }

    let embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Não podes depositar Rubies negativos.`
      );

    if (message.content.includes("-")) {
      return message.channel.send(embed3);
    }
    let embed4 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Você não têm essa quantidade de Rubies.`
      );

    if (member < args[0]) {
      return message.channel.send(embed4);
    }

    let embed5 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:6181_check:734253564746137620>| Você depositou **${
          args[0]
        }** <:5648_ruby_logo:734250477822279732> Rubies no banco.`
      );

    message.channel.send(embed5);
    db.add(`bank_${message.guild.id}_${user.id}`, args[0]);
    db.subtract(`money_${message.guild.id}_${user.id}`, args[0]);
  }
};

module.exports.help = {
  name: "depositar",
  aliases: ["dep"]
};
