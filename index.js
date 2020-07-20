console.log("Conectando...")
const Discord = require('discord.js');
const moment = require("moment")
moment.locale('pt-BR');
const client = new Discord.Client({
    autoReconnect: true,
    messageCacheMaxSize: 2024,
    fetchAllMembers: true,
    disabledEvents: ['typingStart', 'typingStop', 'guildMemberSpeaking'],
    messageCacheLifetime: 1680,
    disableEveryone: false,
    messageSweepInterval: 1680
});
const config = require("./config.json")

//var token = config.token

var prefix = config.prefix
var dono = config.dono

client.login(process.env.token)

client.on("ready", () => {

    var jogando = `/help | ${client.users.size} Cabrons!`
    console.log("Conectado!!")
    console.log(`Servidores(${client.guilds.size}):\n${client.guilds.map(servidor => servidor.name).join(", ")}`)
    
    client.user.setGame(jogando);
   

})



client.on('guildMemberAdd', member => {
  
  if (member.guild.id !== '709454367484412075') return;
  
  let embed = new Discord.RichEmbed()
    .setColor("#4d0cb5")
    .setAuthor(member.user.username, member.user.displayAvatarURL)
    .setDescription(`**Seja bem vindo(a) <a:711191987524730891:711263483144044627> **\n\n <a:711037344798474260:711251952536780802> **ID do Usuário:** ${member.user.id}\n\n📅 **Conta criada em:** ${moment(member.user.createdAt).format('LLLL')}\n\n <:706054581230108763:711261162527785070> **Membro Número:** __${member.guild.memberCount}__` + `º` + `\n\n *<#711052318828789831>* *<#709472290450047006>*`)
    .setThumbnail(member.user.displayAvatarURL)
    .setFooter(" Cabrons Community - Direitos Reservados°")
     
  let wec = client.channels.get('733384176270704690')
    
    wec.send(`<@${member.id}>`).then(message => setTimeout(() => message.delete(), 300000))
    wec.send(embed).then(message => setTimeout(() => message.delete(), 300000))
  
}); 





client.on('message', message => {
  if(message.author.bot || message.channel.type !== 'text') return;
  let user = message.mentions.members.first()
  if (user) {
    if (user.id === '582493267900235776') {
      message.channel.send('<:4228_discord_bot_dev:711273250038218803> O meu prefixo é ``/``.\n Para mais informações use ``/info`` ou ``/help``. ')
    }
  }
})


client.on("message", (message) => {
  
     if (message.content === '<@582493267900235776') {
      message.channel.send("<:4228_discord_bot_dev:711273250038218803> O meu prefixo é ``/``.\n Para mais informações use ``/info ou /help``. ")
    }
    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
   
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {

        if (err.code == "MODULE_NOT_FOUND") return;
        console.error(err);

    } 
      
  

  
  
})