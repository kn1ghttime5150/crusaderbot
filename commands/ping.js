module.exports = {
	name: 'ping',
	description: 'Ping!',
    cooldown: 5,
    execute(message, args) {
		message.channel.send('Pong.');
	},
};

// ╭─────────────────────────────────────────────────────────────────╮
// │                                                                 │
// │                    Written by Kn1ghtTime                        │
// │                   Property of CrusaderBot                       │
// │                                                                 │
// ╰─────────────────────────────────────────────────────────────────╯