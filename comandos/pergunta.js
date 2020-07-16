const Discord = module.require('discord.js');
  
var fortunes = [
    "**🎱 Sim**",
    "**🎱 Não**",
    "**🎱 Talvez**",
    "**🎱 Não sei, tente mais tarde**",
    "**🎱 Depende...**",
    "**🎱 Não sei, seu corno.**",
    "**🎱 TEU CU**",
    "**🎱 VÁ SI FUDE, CARA**",
];

var owner_fortunes = [
    "**🎱 Sim**",
    "**🎱 Não**",
    "**🎱 Talvez**",
    "**🎱 Não sei, tente mais tarde**",
    "**🎱 Depende...**"
]

module.exports.run = async (bot, message, args) => {
  
  if(!args[0]) return message.channel.send(`<a:702223671066099812:711253483067801631> ${message.author} ` + "**| Por favor, insira uma pergunta que você gostaria que eu respondesse**")
  
  if (!bot.config.owners.includes(message.author.id)) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)])
  else message.channel.send(owner_fortunes[Math.floor(Math.random() * owner_fortunes.length)])
  //else message.channel.send("<:Errado:454383164652257292>" + "**| **ToU Tã0 D406Ad0 Qu3 Já Nã0 53i 13r :(");
}

exports.command = {
    name: '8ball',
    permission: "Nenhuma",
    description: 'Obtém uma resposta a uma pergunta!',
    category: "fun",
    usage: ['<pergunta>'],
    enabled: true,
    permlevel: 1
}