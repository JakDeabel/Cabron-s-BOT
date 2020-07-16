const Discord = require('discord.js')
const moment = require('moment')
require('moment-duration-format')
moment.locale('pt-BR')
module.exports.run = async (bot, message, args) => {

	let usuario = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if (message.mentions.users.size < 1) return message.channel.send(`:x: \`|\` Mencione alguem para reportar`)
	var razão = args.join(" ").slice(22);
	if (razão.length < 1) return message.channel.send(":x: \`|\` Você não colocou uma razão para reportar esse usuario")
  message.reply(`Utilizador ${usuario.user.username} reportado com sucesso!`)
	let canal = bot.channels.get("710270600802730055")
	const embed = new Discord.RichEmbed()
		.setAuthor(`Usuario reportado: ${usuario.user.username}`, usuario.displayAvatarURL)
		.addField("Utilizador:", message.author.username, true)
		.addField("Motivo:", razão, true)
		.setColor("#4a2496")
		.addField("Horario:", moment(message.createdAt).format("lll"), true)
	canal.send(embed).then(async msg => {
		await msg.react("✅")
		await msg.react("❌")
		const filter = (reaction, user) => {
			return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id
		};

		const aceita = await msg.awaitReactions(filter, { max: 1 }).then(collected => {

			const reaction = collected.first();
			if (reaction.emoji.name === '✅') {
				let role = message.guild.roles.find(r => r.id == '710593978789134347');
				usuario.addRole(role);
				setTimeout(() => {
					usuario.removeRole(role)
				}, 1000 * 120)
				message.guild.members.get(usuario.id).addRole("711267700025851935");
				const aceito = new Discord.RichEmbed()
					.setDescription(`Caso aceito! \`${message.author.username}\``)
					.setColor(0x36393e)
        msg.edit(aceito)
        msg.clearReactions()
			} else {
				if (reaction.emoji.name === '❌') {
					const negado = new Discord.RichEmbed()
						.setDescription('Caso negado!')
						.setColor(0x36393e)
          msg.edit(negado)
         msg.clearReactions()  
        console.log(reaction)
				}
			}
		})
	})
}

// De aceitar o user reportado é mutado por um X tempo, se recusar apenas é recusado, ai o bot edita a msg e fala "Caso aceito", "Caso negado"                                                         

