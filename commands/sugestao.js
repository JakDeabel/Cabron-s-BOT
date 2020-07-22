const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports.run = (bot, message, args) => {

    let sugestao = args.join(" ");
    if (!sugestao) return message.reply("insira sua sugestão.")

    let embed = new Discord.RichEmbed()
        .setColor("#4a2496")
        .addField("**NOVA SUGESTÃO**", `${sugestao}`)
        .addField("**SUGESTÃO ENVIADO POR:**", `${message.author}`)
        .addField("**SIM** -  👍", "Para votar em **SIM**, basta reagir abaixo.")
        .addField("**NÃO** - 👎", "Para votar em **NÃO**, basta reagir abaixo.")
        .setTimestamp(new Date())

    let canal = message.guild.channels.find(canal => canal.id === "709473997368328192"); //coloque o id do canal de sugestões.
    if (!canal) return message.reply("❌ | Não existe nenhum canal para enviar a sua sugestão.");

    message.delete();
    canal.send(embed).then(msg => msg.react("👍").then(r => msg.react("👎")));
    message.reply(`<a:6181_check:734253564746137620> | Sua sugestão foi enviada com sucesso!`);
}

module.exports.help = {
  name:"sugestao",
  aliases: ["wd"]
}