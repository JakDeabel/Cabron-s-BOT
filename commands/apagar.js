const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = parts[1]
    let toDeleteCount = parseInt(parts[1]);
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            if (message.guild.member(bot.user).hasPermission('MANAGE_MESSAGES')) {
                if (parts.length > 1 && parts.length < 3) {
                    if (isNaN(toDeleteCount) === false) {
                        if (toDeleteCount < 100) {
                            message.channel.bulkDelete(toDeleteCount + 1, true)
                            message.channel.sendMessage('<a:711037344798474260:711251952536780802> | ' + toDeleteCount + ' mensagens foram deletadas neste canal.').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })

                        } else {
                            message.channel.sendMessage('<a:702223671066099812:711253483067801631> | Você só pode apagar até 100 mensagens por vez.').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
                        }
                    } else {
                        message.channel.sendMessage('<a:702223671066099812:711253483067801631> | Parece que os argumentos dados não são números. Sintaxe correta: `' + parts[0] + ' 10`').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
                    }
                } else {
                    message.channel.sendMessage('<a:702223671066099812:711253483067801631> | Informe o número de mensagens a deletar. Sintaxe correta: `' + parts[0] + ' 10`').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
                }
            } else {
                message.channel.sendMessage('<a:702223671066099812:711253483067801631>| Eu não tenho permissão necessária para fazer isso: `MANAGE_MESSAGES`').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
            }
        } else {
              message.channel.sendMessage('<a:702223671066099812:711253483067801631> | Você não tem a permissão necessária para fazer isso: `MANAGE_MESSAGES`').then(message => {
                                setTimeout(() => {message.delete()}, 5000)
                            })
        }
}

module.exports.help = {
  name: "apagar",
  aliases: [""]
};
