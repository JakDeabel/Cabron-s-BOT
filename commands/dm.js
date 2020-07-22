const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports.run = async (bot, message, args) => {


const members = message.guild.members.filter(m => !m.user.bot).array(); // Filter out bots.

let undelivered = 0;
  
  let sayMessage = args.join(" ");

for (let i = 0; i < members.length; i++) {  // Using an array and a for loop rather than
  const member = members[i];                // Collection.forEach() due to the fact that
  await member.send(sayMessage)         // the latter will move onto the proceeding
    .catch(() => undelivered++);            // code before waiting for the promises to
}                                           // fulfill. https://stackoverflow.com/a/37576787

message.channel.send(`Messages sent. ${undelivered} members couldn't receive it.`)
  .catch(console.error);
  
  
    
  }

module.exports.help = {
  name:"dm",
  aliases: ["pro"]
}