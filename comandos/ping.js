exports.run = async (client, message, args) => {
    let parsed = client.utils.parseArgs(args, ['o']);

    if (parsed.options.o) {
        return message.edit(':stopwatch: Ping').then(m => {
            let time = message.editedTimestamp - message.createdTimestamp;
            client.utils.playAnimation(m, 500, [
                ':stopwatch: __P__ing',
                ':stopwatch: __Pi__ng',
                ':stopwatch: __Pin__g',
                ':stopwatch: __Ping__',
                `:stopwatch: ***Pong!*** \`${time}ms\``
            ]);
        });
    }

    await message.edit(':thinking: Ping');

    const delay = message.editedTimestamp - message.createdTimestamp;

    (await message.edit(`:stopwatch: Pong! \`${delay}ms\``)).delete(5000);
};

exports.info = {
    name: 'ping',
    usage: 'ping [-o]',
    description: 'Pings the bot',
    options: [
        {
            name: '-o',
            usage: '-o',
            description: 'Shows the old ping message (animated)'
        }
    ]
};