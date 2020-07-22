const Discord = require('discord.js');

function ms_convert(ms) {
  let days = Math.floor(ms / (24 * 60 * 60 * 1000));
  let daysms = ms % (24 * 60 * 60 * 1000);
  let hours = Math.floor((daysms) / (60 * 60 * 1000));
  let hoursms = ms % (60 * 60 * 1000);
  let minutes = Math.floor((hoursms) / (60 * 1000));
  let minutesms = ms % (60 * 1000);

  var day_string = 'dia';
  var hour_string = 'hora';
  var minute_string = 'minuto';

  if (days !== 1) day_string = 'dias';
  if (hours !== 1) hour_string = 'horas';
  if (minutes !== 1) minute_string = 'minutos';

  return `**${days} ${day_string}, ${hours} ${hour_string} e ${minutes} ${minute_string}.**`;
}

module.exports.run = async (bot, message, args) => {
  return message.channel.send(new Discord.RichEmbed().addField(`Tempo online do ${bot.user.username} desde a ultima atualização.`,
      ms_convert(bot.uptime))
    .setColor('#4a2496'));
}

module.exports.help = {
  name: "uptime",
  aliases: ["up"]
};
