const Discord = require("discord.js");
const fs= require("fs");

module.exports.run = async (client, message, args) => {

    let menuEmbed = new Discord.RichEmbed()
	
	.setTitle("Help Menu")
	.setColor('#4a2496')
	.setDescription("Escolha uma categoria")
	.addField("Reações", 'Infos = 🗒  \n Entretenimento = 🎮 \n Economia = 💰')
	.setFooter(`Comando solicitado por: ${message.author.username}`, message.author.avatarURL)
	.setTimestamp();
	
    
        var embed1 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Infos comandos")
        .setDescription("``help``, ``reload``, ``poll``, ``clear``, ``uptime``")
        .setColor("#4a2496")
        .setFooter(`${client.user.username} | Prefixo: /`, client.user.avatarURL)
		.setTimestamp();
		
		
		var embed3 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Comandos de entretenimento")
        .setDescription("Em desenvolvimento, jakDAX") 
        .setColor("#4a2496")
        .setFooter(`${client.user.username} | Prefixo: /`, client.user.avatarURL)
		.setTimestamp();
  
  var embed4 = new Discord.RichEmbed()

        .setAuthor(`${message.author.username}`, message.author.avatarURL)
        .setTitle("Comandos de economia")
        .setDescription("Em desenvolvimento, jakDAX") 
        .setColor("#4a2496")
        .setFooter(`${client.user.username} | Prefixo: /`, client.user.avatarURL)
		.setTimestamp();
		
	

        message.channel.send(menuEmbed).then(msg2 => {

            msg2.react('🗒');
            msg2.react('🎮');
            msg2.react('💰');
            msg2.react('🔙');

			
        const collector = msg2.createReactionCollector((r, u) => (r.emoji.name === '🗒' || r.emoji.name === '🎮' || r.emoji.name === '💬' || r.emoji.name === '🔙' || r.emoji.name === '💰')&& (u.id !== client.user.id && u.id === message.author.id))
        collector.on("collect", (r, u)=>{
            switch (r.emoji.name) {
            case '🗒':
            r.message.edit(embed1)
			break;
            case '🎮': 
            r.message.edit(embed3)
			break;
            case '🔙': 
            r.message.edit(menuEmbed)
			break;
            case '💰': 
            r.message.edit(embed4)
            break;
            }
            })
        }) 

}