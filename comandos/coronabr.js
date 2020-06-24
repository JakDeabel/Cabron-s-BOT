const Discord = require('discord.js');
const request = require("request");

module.exports.run = async (bot, message, args) => {
  message.delete()


  request({ uri: "https://coronavirus-19-api.herokuapp.com/countries/Brazil", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    
  //  setInterval(() => {
   
    let cobr = new Discord.RichEmbed()
        .setTitle("Corona Virus Stats | Brasil")
        .addField("🦠 Total de Casos:", body.cases, false)
        .addField("📆 Casos Hoje:", body.todayCases, false)
        .addField("🧪 Curados:", body.recovered, false)
        .addField("🧬 Casos Ativos:", body.active, false)
        .setFooter(`Total de Mortes: ${body.deaths} | Mortos Hoje: ${body.todayDeaths} | Estado Grave: ${body.critical}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/685200348863791132/693157113975013436/bandeira-do-brasil.png")
        .setColor('#5440cd')
    
    message.channel.send(cobr)
      
    //  }, 3600 * 12 * 1000); 
  
  });

};