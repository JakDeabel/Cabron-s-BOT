const Discord = require("discord.js");
//👨 Masculino 👩 Feminino 🌈 LGBT
exports.run = (bot, message, args) => {
  //if(!message.member.roles.some(r => r.name === "👨 Masculino") || !message.member.roles.some(r => r.name === "👩 Feminino") || !message.member.roles.some(r => r.name === "🌈 LGBT")) {
    let suggestmessage = args.join(" ")//.slice(22);
    let suggestchannel = client.channels.get("709473997368328192");

    if (!suggestchannel) {
        return message.reply("<a:702223671066099812:711253483067801631> **|** Não detetei o canal de sugestões!")
    }

    if (!suggestmessage) {
        return message.reply("<a:702223671066099812:711253483067801631> **|** Por favor sugira algo!")
    }

    let embed = new Discord.RichEmbed()
        .addField("**Sugestão Recebida**", `${suggestmessage}`)
        .setFooter(`Sugestão de ${message.author.tag}`)
        .setColor('#4a2496')
        .setTimestamp()
    suggestchannel.send({
        embed
    })/*.then(msg => {
        msg.react('✅').then(r => msg.react('❎'))
    });*/


    message.reply(`<a:711037344798474260:711251952536780802> | Sugestão enviada.`)
    return;
  //} else {
    //message.reply('Por favor registre-se em #🐦 • registro para usar este comando.')
  //}
}