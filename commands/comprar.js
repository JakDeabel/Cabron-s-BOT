const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("c")) return;

  let user = message.author;

  let author = db.fetch(`money_${message.guild.id}_${user.id}`);

  let Embed = new Discord.RichEmbed()
    .setColor("#4a2496")
    .setDescription(
      `<a:702223671066099812:711253483067801631>| Precisas de **3500** <:5648_ruby_logo:734250477822279732> Rubies para comprares o VIP Bronze.`
    );

  if (args[0] == "bronze") {
    if (author < 3500) return message.channel.send(Embed);

    db.fetch(`bronze_${message.guild.id}_${user.id}`);
    db.set(`bronze_${message.guild.id}_${user.id}`, true);

    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:6181_check:734253564746137620>| Compraste o VIP Bronze por **3500** <:5648_ruby_logo:734250477822279732> Rubies`
      );

    db.subtract(`money_${message.guild.id}_${user.id}`, 3500);
    message.channel.send(Embed2);
  } else if (args[0] == "caixa") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **600** <:5648_ruby_logo:734250477822279732> Rubies para comprar uma caixa.`
      );

    if (author < 600) return message.channel.send(Embed2);

    db.fetch(`nikes_${message.guild.id}_${user.id}`);
    db.add(`nikes_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:6181_check:734253564746137620>| Compraste uma caixa por **600** <:5648_ruby_logo:734250477822279732> Rubies`
      );

    db.subtract(`money_${message.guild.id}_${user.id}`, 600);
    message.channel.send(Embed3);
  } else if (args[0] == "chave") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **800** <:5648_ruby_logo:734250477822279732> Rubies para comprar uma chave.`
      );

    if (author < 800) return message.channel.send(Embed2);

    db.fetch(`car_${message.guild.id}_${user.id}`);
    db.add(`car_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(`<a:6181_check:734253564746137620>| Compraste uma chave por **800**  <:5648_ruby_logo:734250477822279732> Rubies`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 800);
    message.channel.send(Embed3);
  } else if (args[0] == "puta") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **1200** <:5648_ruby_logo:734250477822279732> Rubies para comprar uma puta.`
      );

    if (author < 1200) return message.channel.send(Embed2);

    db.fetch(`house_${message.guild.id}_${user.id}`);
    db.add(`house_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(`<a:6181_check:734253564746137620>| Compraste uma puta por **1200** <:5648_ruby_logo:734250477822279732> Rubies.`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 1200);
    message.channel.send(Embed3);
  } else {
    let embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription("<a:702223671066099812:711253483067801631>| Indica um item para comprar.");
    message.channel.send(embed3);
  }
};

module.exports.help = {
  name: "comprar",
  aliases: [""]
};
