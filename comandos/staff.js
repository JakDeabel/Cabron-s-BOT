const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = (client, message, args) => { 
    message.member.send('> <:JuiceBox:710121833885860040> Qual o seu nome? (1º - Nome Pessoal)').then(async msg => {
        message.channel.send(`:envelope_with_arrow: ${message.author}, mandei o formulário em seu privado!`)
        let fnome = msg.channel.createMessageCollector(m => m.author.id === message.author.id, {
            max: 1
        })

        fnome.on("collect", () => {
            message.member.send('> <:JuiceBox:710121833885860040> Qual a sua idade?').then(async msg2 => {
                let fidade = msg2.channel.createMessageCollector(m => m.author.id === message.author.id, {
                    max: 1
                })

                fidade.on("collect", () => {
                    message.member.send('> <:JuiceBox:710121833885860040> Em qual Setor você Deseja se Ingressar?').then(async msg3 => {
                        let fmot = msg3.channel.createMessageCollector(m => m.author.id === message.author.id, {
                            max: 1
                        })
                        
                fmot.on("collect", () => {
                    message.member.send('> <:JuiceBox:710121833885860040> Quais experiências você possui nesse setor?').then(async msg4 => {
                        let fexp = msg4.channel.createMessageCollector(m => m.author.id === message.author.id, {
                            max: 1
                        })
                 fexp.on("collect", () => {
                    message.member.send('> <:JuiceBox:710121833885860040> Você possui um servidor próprio?').then(async msg5 => {
                        let fprop = msg5.channel.createMessageCollector(m => m.author.id === message.author.id, {
                            max: 1
                        })
                 fprop.on("collect", () => {
                    message.member.send('> <:JuiceBox:710121833885860040> Você é Staff em quantos servidores ?').then(async msg6 => {
                        let fstaff = msg6.channel.createMessageCollector(m => m.author.id === message.author.id, {
                            max: 1
                        })
                 fstaff.on("collect", () => {
                    message.member.send('> <:JuiceBox:710121833885860040> Quantas horas em média você tem de disponibilidade dentro do Discord?').then(async msg7 => {
                        let fdisp = msg7.channel.createMessageCollector(m => m.author.id === message.author.id, {
                            max: 1
                        })

                        fdisp.on("collect", () => {
                            message.member.send('<a:711191987524730891:711263483144044627> Formulário enviado, aguarde uma resposta')
                            //let server = client.guild.get('617860894558257172')
                            let canalf = message.guild.channels.cache.find(x => x.id === "710270600802730055");
                            let embedf = new Discord.MessageEmbed()
                                .setColor('#4a2496')
                                .setTimestamp()
                                .setThumbnail(`${message.author.displayAvatarURL}`)
                                .setTitle(`Novo Formulário para Staff`)
                                .setFooter(`Formulário de: ${message.author.username}`)
                                .addField(`<:9955_Stonks:710121738784210965> Nome:`, `${fnome.collected.first().content}` ,false)    
                                .addField(`<:5818_Nice:710118924624068638> ID`, `${message.author.id}` ,false)    
                                .addField(` Idade:`, `${fidade.collected.first().content}` ,false)
                                .addField(` Motivo da Escolha de Setor:`, `${fmot.collected.first().content}`, false)
                                .addField(` Experiências no Setor:`, `${fexp.collected.first().content}`, false)
                                .addField(` Possui servidor próprio?:`, `${fprop.collected.first().content}` ,false)
                                .addField(` Staff de algum Servidor?`, `${fstaff.collected.first().content}` ,false)
                                .addField(` Horas em média de Disponibilidade no Discord:`, `${fdisp.collected.first().content}` ,false);
                            canalf.send(embedf)
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}
                           
module.exports.command = {
    name: 'form',
    description: 'Faz um form.',
    category: "outros",
    usage: ['form'],
    enabled: true,
    permlevel: 1
}