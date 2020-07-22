const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if (!message.content.startsWith("c")) return;

  let user = message.author;

  let author = db.fetch(`money_${message.guild.id}_${user.id}`);

  let Embed = new Discord.RichEmbed()
    .setColor("#4a2496")
    .setDescription(
      `<a:702223671066099812:711253483067801631>| Precisas de **100.00'** <:image:735338033183981628> Rubies para comprares o :orange_book: **VIP Senpai**.`
    );

  if (args[0] == "senpai") {
    if (author < 100000) return message.channel.send(Embed);

    db.fetch(`bronze_${message.guild.id}_${user.id}`);
    db.set(`bronze_${message.guild.id}_${user.id}`, true);

    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:6181_check:734253564746137620>| Compraste o :orange_book: **VIP Senpai** por **100.000** <:image:735338033183981628> Rubies.`
      );

    db.subtract(`money_${message.guild.id}_${user.id}`, 100000);
    message.channel.send(Embed2);
  } else if (args[0] == "joia") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **6.000** <:image:735338033183981628> Rubies para comprar uma :ring: **Jóia**.`
      );

    if (author < 6000) return message.channel.send(Embed2);

    db.fetch(`nikes_${message.guild.id}_${user.id}`);
    db.add(`nikes_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:6181_check:734253564746137620>| Compraste uma :ring: **Jóia** por **6.000** <:image:735338033183981628> Rubies.`
      );

    db.subtract(`money_${message.guild.id}_${user.id}`, 6000);
    message.channel.send(Embed3);
  } else if (args[0] == "carro") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **12.000** <:image:735338033183981628> Rubies para comprar um :red_car: **Carro**.`
      );

    if (author < 12000) return message.channel.send(Embed2);

    db.fetch(`car_${message.guild.id}_${user.id}`);
    db.add(`car_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(`<a:6181_check:734253564746137620>| Compraste um :red_car: **Carro** por **12.000** <:image:735338033183981628> Rubies.`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 12000);
    message.channel.send(Embed3);
  } else if (args[0] == "puta") {
    let Embed2 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(
        `<a:702223671066099812:711253483067801631>| Precisas de **7.500** <:image:735338033183981628> Rubies para comprar uma :woman_singer: **Puta**.`
      );

    if (author < 7500) return message.channel.send(Embed2);

    db.fetch(`house_${message.guild.id}_${user.id}`);
    db.add(`house_${message.guild.id}_${user.id}`, 1);

    let Embed3 = new Discord.RichEmbed()
      .setColor("#4a2496")
      .setDescription(`<a:6181_check:734253564746137620>| Compraste uma :woman_singer: **Puta** por **7.500** <:image:735338033183981628> Rubies.`);

    db.subtract(`money_${message.guild.id}_${user.id}`, 7500);
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
