module.exports = {
	name: 'ping',
	description: 'Ping command.',
	usage: '//ping',
	args: false,
	argsCount: 0,
	guildOnly: false,
	directOnly: false,
	cooldown: 3,
	disabled: false,
	execute(client, message, args) {
		const apiPing = client.ws.ping;
		message.channel.send("Pinging...").then(m => {
	    const botPing = m.createdTimestamp - message.createdTimestamp;
	    m.edit(`Bot Latency: ${botPing}ms, API Latency: ${apiPing}ms.`);
	  });
	},
};