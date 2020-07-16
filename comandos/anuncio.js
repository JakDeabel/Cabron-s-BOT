const Discord = require('discord.js')
const bot = new Discord.Client();

exports.run = (client, message, args) => {  
  if (message.author.id !== '340622268424126465' && message.author.id !== '318149637964038144' && message.author.id !== '380427905995636747' && !client.config.owner.includes(message.author.id)) return; 
  
  const filter = m => m.author.id === message.author.id
  
    message.reply('> <:JuiceBox:710121833885860040> Qual vai ser o **título** do seu anúncio?').then(async msg1 => {
      let at = msg1.channel.createMessageCollector(filter , {
      max: 1
    })
    
  at.on("collect", () => {
    
    message.reply('> <:JuiceBox:710121833885860040> Qual vai ser o **conteúdo** do seu anúncio?').then(async msg2 => {
      let ac = msg2.channel.createMessageCollector(filter , {
      max: 1
    })
      
  ac.on("collect", () => {
     
       let canala = message.guild.channels.find(`id`, "709473791440584794");
       let embeda = new Discord.RichEmbed()
         .setTitle(`${at.collected.first().content}`)
         .setDescription(`${ac.collected.first().content}`)
         .setColor('#4a2496')
         .setTimestamp()
       
       canala.send(embeda)   
       })
     })      
   })
 })
}