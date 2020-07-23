const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let channel = bot.channels.get("735710079227134012")
let embed = new Discord.RichEmbed()
.setTitle("Novo Bug Reportado")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Bug", bug)
.addField("Reportado por", user)
.setColor("#4a2496")

message.channel.send("**<a:711037344798474260:711251952536780802>| Bug reportado com sucesso, será analisado e corrigido o mais rapidamente possivel.**")
channel.send(embed).then(i => i.react("⏳"))

  


}

module.exports.help = {
  name:"reportarbug",
  aliases: ["rb"]
}