const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  message.delete()
  
const Discord = require("discord.js");
const request = require("request");

  request({ uri: "https://coronavirus-19-api.herokuapp.com/countries/Portugal", json: true }, (error, response, body) => {
    if (error) throw new Error(error);   
    
    let copt = new Discord.RichEmbed()
        .setTitle("Corona Virus Stats | Portugal")
        .addField("🦠 Total de Casos:", body.cases, false)
        .addField("📆 Casos Hoje:", body.todayCases, false)
        .addField("🧪 Curados:", body.recovered, false)
        .addField("🧬 Ativos:", body.active, false)
        .setFooter(`Total de Mortes: ${body.deaths} | Mortos Hoje: ${body.todayDeaths} | Estado Grave: ${body.critical}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/685200348863791132/693157172460388442/a0d6a11df6614fbd6eaeb89b5f39b47d.png")
        .setColor('#5440cd')
     
    message.channel.send(copt)

  });
  
};


module.exports.help = {
  name:"coronapt",
  aliases: ["ct"]
}