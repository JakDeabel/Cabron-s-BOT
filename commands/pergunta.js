const Discord = require('discord.js');
const {
  version
} = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
if (!args) return message.reply("Qual é a pergunta, mortal?")
        message.reply("Vamos perguntar aos Deuses do Olimpo, e deixá-los decidir.")
        message.channel.send("<:emoji_45:733604554809278515>")
        let vote = ""
        let acc = 0;
  
        for (i=1; i<=4; ++i) {
            let r = Math.random()
            if (r >=0.5) {
                vote = vote + ":white_check_mark:"
                acc = acc+1
            } else {
                vote = vote + ":negative_squared_cross_mark:"
            }
        }
        message.channel.send(vote)
        if (acc>=2) {
            message.channel.send(`O Deuses do Olimpo votaram, eles concordam contigo! \`${acc}/4\` vote`)
        } else {
            message.channel.send(`Os Deuses do Olimpo votaram, eles não concordam contigo! \`${acc}/4\` vote`)
        }
    }

module.exports.help = {
  name:"pergunta",
  aliases: ["pg"]
}