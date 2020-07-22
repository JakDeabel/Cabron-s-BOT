const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
exports.run = (bot, message, args) => {
	let argsJunto = message.content.split(" ").slice(1).join(' ')
	if(message.author.id === '318149637964038144') {
    if(argsJunto.length < 1) {
    	message.channel.sendMessage(`**<a:702223671066099812:711253483067801631> | Diga um comando para ser resetado.**`); 
    } else {
    	delete require.cache[require.resolve(`./${args[0]}.js`)];
    	message.channel.sendMessage('**<a:711037344798474260:711251952536780802> | O comando `' + argsJunto + '` foi resetado.**'); 
    }
  // the path is relative to the *current folder*, so just ./filename.js
} else {
  	message.channel.sendMessage('**<a:702223671066099812:711253483067801631> | Você não tem permissão para executar este comando.**')
  }
}

module.exports.help = {
  name:"reload",
  aliases: [""]
}