const Discord = require("discord.js");
const fs = require("fs");
 
exports.run = async (bot, message, args) => {
 
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Você não tem essa permissão | Digite o comando perms <@usuario> para saber de suas permissões!");
  if(!args[0] || args[0 == "help"]) return message.reply("Para trocar de prefixo digite: >prefixo <novo prefixo>");
 
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
 
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
 
  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });
 
  let sEmbed = new Discord.RichEmbed()
  .setColor("4a2496")
  .setTitle("PREFIXO ALTERADO COM SUCESSO")
  .setDescription(`Prefixo Alterado para: ${args[0]}`);
 
  message.channel.send(sEmbed);
 
}
 
module.exports.help = {
  name:"prefix",
  aliases: ["pf"]
}