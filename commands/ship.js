const Jimp = require('jimp');
const Fs = require('fs');
const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    
    const bg = await Jimp.read('https://cdn.discordapp.com/attachments/560256504998133780/640445985100922900/ship_cmd.png')
    const mascara = await Jimp.read('https://cdn.discordapp.com/attachments/560256504998133780/640445988594778113/ship_cmd_mask.png')
    const fonte = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE)
    const Corafonte = await Jimp.loadFont(Jimp.FONT_SANS_128_BLACK)
    let shipOne = message.mentions.members.first(2)[0]
    let shipSec = message.mentions.members.first(2)[1]

    if(!shipOne) shipOne = message.guild.members.get(message.author.id)
    if(!shipSec) shipSec = message.guild.members.get(bot.user.id)
    
    let Text = [
        {
            txt: "Só com muita fé!",
            padrão: 0
        },{
            txt: "Os opostos se atraem?",
            padrão: 50
        },{
            txt: "Foram feitos um para o outro.",
            padrão: 100
        },
    ]

    let rnd = Math.floor(Math.random() * Text.length)

    let avatarOne = await Jimp.read(shipOne.user.displayAvatarURL)
    let avatarSec = await Jimp.read(shipSec.user.displayAvatarURL)

    mascara.resize(450, 450)

    avatarOne.resize(450, 450)
    avatarSec.resize(450, 450)

    avatarOne.mask(mascara);
    avatarSec.mask(mascara);
    
    bg.composite(avatarOne, 50, 50)
    bg.composite(avatarSec, 1100, 50)
    
    bg.print(Corafonte, 705, 215, Text[rnd].padrão + "%")
    bg.print(fonte, 170, 450, shipOne.user.username)
    bg.print(fonte, 1200, 450, shipSec.user.username)
    
    .write('ship.png')

    message.reply(new Discord.RichEmbed()
        .setTitle(`${shipOne.user.username} ❤ ${shipSec.user.username}`)
        .setDescription(Text[rnd].txt)
        .setColor("#4a2496")
        .attachFiles(['ship.png'])
        .setImage('attachment://ship.png')
    ).then(S => {
        Fs.unlink('ship.png',(e) => {if(e) console.log(e)})
    })
}

module.exports.help = {
    name:"ship",
    aliases: ["roul"]
  }