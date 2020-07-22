const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("c")) return;

  let user = message.author;

  let author = db.fetch(`money_${message.guild.id}_${user.id}`);

  let Embed = new Discord.RichEmbed()
    .setColor("#4a2496")
    .setDescription(
      `<a:702223671066099812:711253483067801631>| Precisas de **3500** <:5648_ruby_logo:734250477822279732> Rubies para comprares o :orange_book: **VIP Senpai**.`
    );

  if (args[0] == "senpai") {
    if (author < 3500) return message.channel.send(Embed);

    db.fetch(`bronze_${message.guild.id}_${user.id}`);
    db.set(`bronze_${message.guild.id}_${user.id}`, true);

    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:6181_check:734253564746137620>| Compraste o :orange_book: **VIP Senpai** por **3500** <:5648_ruby_logo:734250477822279732> Rubies.`
      );

    db.subtract(`money_${message.guild.id}_${user.id}`, 3500);
    message.channel.send(Embed2);
  } else if (args[0] == "joia") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **600** <:5648_ruby_logo:734250477822279732> Rubies para comprar uma :ring: **Jóia**.`
      );

    if (author < 600) return message.channel.send(Embed2);

    db.fetch(`nikes_${message.guild.id}_${user.id}`);
    db.add(`nikes_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:6181_check:734253564746137620>| Compraste uma :ring: **Jóia** por **600** <:5648_ruby_logo:734250477822279732> Rubies.`
      );

    db.subtract(`money_${message.guild.id}_${user.id}`, 600);
    message.channel.send(Embed3);
  } else if (args[0] == "carro") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **800** <:5648_ruby_logo:734250477822279732> Rubies para comprar um :red_car: **Carro**.`
      );

    if (author < 800) return message.channel.send(Embed2);

    db.fetch(`car_${message.guild.id}_${user.id}`);
    db.add(`car_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(`<a:6181_check:734253564746137620>| Compraste um :red_car: **Carro** por **800**  <:5648_ruby_logo:734250477822279732> Rubies.`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 800);
    message.channel.send(Embed3);
  } else if (args[0] == "puta") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **1200** <:5648_ruby_logo:734250477822279732> Rubies para comprar uma :woman_singer: **Puta**.`
      );

    if (author < 1200) return message.channel.send(Embed2);

    db.fetch(`house_${message.guild.id}_${user.id}`);
    db.add(`house_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(`<a:6181_check:734253564746137620>| Compraste uma :woman_singer: **Puta** por **1200** <:5648_ruby_logo:734250477822279732> Rubies.`);

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
