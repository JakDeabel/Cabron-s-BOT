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

    .setTitle(`Olá sou o ${bot.user.username} e aqui estão as minhas informações!`)
    .setColor("#4a2496")
    .setThumbnail(icon)
    .addField('Meu nome:', bot.user.username, true)
    .addField('Servidores:', bot.guilds.size, true)
    .addField('Versão Discord.js:', `v${version}`, true)
    .addField('Versão Node:', `${process.version}`, true)
    .addField('Memoria sendo usada:', `${(((process.memoryUsage().heapUsed)/1024)/1024).toFixed(0)}MBs of RAM`, true)
    .addField('Usuários:', bot.users.size, true)
    .addField('Uptime', `${time(bot.uptime)}`);

  return message.channel.send(embed);
};

module.exports.help = {
  name:"botinfo",
  aliases: ["wr"]
}