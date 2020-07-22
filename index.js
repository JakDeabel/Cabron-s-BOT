
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment")
moment.locale('pt-BR');
const bot = new Discord.Client({disableEveryone: false});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();


bot.on('guildMemberAdd', member => {
  
  if (member.guild.id !== '709454367484412075') return;
  
  let embed = new Discord.RichEmbed()
    .setColor("#4d0cb5")
    .setAuthor(member.user.username, member.user.displayAvatarURL)
    .setDescription(`**Seja bem vindo(a) <a:711191987524730891:711263483144044627> **\n\n <a:711037344798474260:711251952536780802> **ID do Usuário:** ${member.user.id}\n\n📅 **Conta criada em:** ${moment(member.user.createdAt).format('LLLL')}\n\n <:706054581230108763:711261162527785070> **Membro Número:** __${member.guild.memberCount}__` + `º` + `\n\n *<#711052318828789831>* *<#709472290450047006>*`)
    .setThumbnail(member.user.displayAvatarURL)
    .setFooter(" Cabrons Community - Direitos Reservados°")
     
  let wec = bot.channels.get('733384176270704690')
    
    wec.send(`<@${member.id}>`).then(message => setTimeout(() => message.delete(), 300000))
    wec.send(embed).then(message => setTimeout(() => message.delete(), 300000))
  
}); 




fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})



 
  bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`c!help`);
  bot.user.setStatus('online');

  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = botconfig.prefix
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )})


bot.login(process.env.token)