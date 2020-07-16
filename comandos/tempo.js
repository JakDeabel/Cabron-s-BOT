const Discord = require('discord.js');
const weather = require('weather-js');
const bot = new Discord.Client();

module.exports.run = (bot, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
    if (err) console.log(err);
    if (result === undefined || result.length === 0) {
      message.channel.send('**Forneça uma localização.**')
      return;
    }
    var current = result[0].current;
    var location = result[0].location;
    const embed = new Discord.MessageEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Tempo em ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor('#4a2496')
      .addField('Fuso Horário',`UTC${location.timezone}`, true)
      .addField('Tipo de Grau',location.degreetype, true)
      .addField('Temperatura',`${current.temperature} Degrees`, true)
      .addField('Aparenta estar', `${current.feelslike} Degrees`, true)
      .addField('Ventos',current.winddisplay, true)
      .addField('Humidade', `${current.humidity}%`, true)
    message.channel.send({embed});
  })
}