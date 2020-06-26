const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: ['p'],
    description: 'Show ping latency',
    cooldown: 5,
    run: async (client, message) => {

        const m = await message.channel.send(`Ping`);
        let embed = new MessageEmbed()
        .setDescription(`Pong!\n🚩 Latency ${Math.floor(m.createdTimestamp - message.createdTimestamp)}\n🌐 Client ${client.ws.ping}`)
        .setFooter('¯\_(ツ)_/¯')
        message.channel.send(embed)
        await m.delete();
    }
}