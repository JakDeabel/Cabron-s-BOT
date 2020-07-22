    
exports.run = (client, message, args) => {

message.channel.sendMessage(`<:6951_Online:735336429286064189> | O meu ping é **${parseInt(client.ping)}** ms.`);

}

module.exports.help = {
  name:"ping",
  aliases: ["wd"]
}