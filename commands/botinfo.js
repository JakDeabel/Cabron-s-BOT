const Discord = require('discord.js');
const {
  version
} = require('discord.js');

module.exports.run = async (bot, message, args) => {
  

  function time(milliseconds) {
    let day, hour, minute, seconds;

    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;

    let string = `\`${day}\` %day%, \`${hour}\` %hour%, \`${minute}\` %minute% and \`${seconds}\` %seconds%`;

    string = string.replace("%day%", "day" + (day === 1 ? "" : "s"));
    string = string.replace("%hour%", "hour" + (hour === 1 ? "" : "s"));
    string = string.replace("%minute%", "minute" + (minute === 1 ? "" : "s"));
    string = string.replace("%seconds%", "second" + (seconds === 1 ? "" : "s"));

    return string;
  };

  let icon = bot.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()

    .setTitle(`<:logosquare4:735708167379353630> Aqui estão as minhas informações!`)
    .setColor("#4a2496")
    .setThumbnail(icon)
    .addField(':bust_in_silhouette: **Meu nome**:', bot.user.username, true)
    .addField('<:logosquare3:735706398104485988> **Servidores**:', bot.guilds.size, true)
    .addField('<:logosquare1:735705050910818354> **Versão Discord.js**:', `v${version}`, true)
    .addField('<:images1:735704010266247189> **Versão Node**:', `${process.version}`, true)
    .addField('<:logosquare2:735705590114025472> **Memoria sendo usada**:', `${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}MBs of RAM`, true)
    .addField(':busts_in_silhouette: **Usuários**:', bot.users.size, true)
    .addField('<:6951_Online:735336429286064189> **Uptime**:', `${time(bot.uptime)}`);

  return message.channel.send(embed);
};

module.exports.help = {
  name:"botinfo",
  aliases: ["wr"]
}