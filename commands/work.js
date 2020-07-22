const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('c!'))return;  

    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 60000;
  
  let vip = await db.fetch(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'Nenhum'
    if(vip === true) vip = 'Bronze'
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.RichEmbed()
        .setColor("#4a2496")
        .setDescription(`<a:702223671066099812:711253483067801631> Estás cansado do trabalho anterior.\n\nPodes voltar a trabalhar em ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {
        
       

        let replies = ['Programador', 'Trolha', 'Entregador de Pizzas', 'Advogado', 'Médico', 'Professor(a)', 'Escravo', 'Lixeiro', 'Burro de Carga']
        
        
        
        let vip = await db.fetch(`bronze_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 500) + 1;
if (vip === null) random = Math.floor(Math.random() * 100) + 1;
        
        

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.RichEmbed()
        .setColor("#4a2496")
        .setDescription(`<a:6181_check:734253564746137620>| Trabalhaste como ${replies[result]} e recebeste **${amount}** <:5648_ruby_logo:734250477822279732> Rubies`);
        message.channel.send(embed1)
      
          
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
}



module.exports.help = {
  name:"work",
  aliases: ["wr"]
}