const Discord = require("discord.js");
const { Canvas } = require("canvas-constructor")
const fetch = require("node-fetch")

module.exports.run = async (bot, message, args, utils) => {
  
  const member = message.mentions.members.first() || message.guild.member(args[0]) || message.member;
  
   const avatar = await fetch(member.user.displayAvatarURL ({format: 'jpg'}))
    
    
let mage = new Canvas(500, 250)
.setColor("#ffffff")
.addRect(0, 0, 500, 250) //we gonna replace it with image
.setColor("#ff2050")
.addRect(0, 0, 500, 80)
.setColor("#ffffff")
.setTextFont('bold 40px Impact') //you can make it bold
.addText("PROFILE CARD", 110, 55)
.setColor("#ff2050")
.setTextFont('bold 20px Impact') 
.addText(`ID - ${message.author.id}`, 30, 140)
.addText(`TAG - ${message.author.tag}`, 30, 170)
.addText(`GUILD NAME - ${message.guild.name}`, 30, 200)
.setColor("#ffffff")
.addCircle(60, 40, 33)
.addCircularImage(await avatar.buffer(), 60, 40, 30)
.toBuffer();
    
    message.channel.send({files: [mage]}) //lol i forget again
  
  }

module.exports.help = {
    name:"profile",
    aliases: ["profilea"],
    permlevel: 10
  }