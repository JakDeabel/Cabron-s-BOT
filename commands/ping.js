    
exports.run = (client, message, args) => {

message.channel.sendMessage(`https://cdn.discordapp.com/emojis/726203636727808061.webp?size=64&v=1 O meu ping é **${parseInt(client.ping)}** ms.`);

}

module.exports.help = {
  name:"ping",
  aliases: ["wd"]
}