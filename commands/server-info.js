module.exports = {
	name: 'server-info',
	description: 'Sends info on the server',
	execute(message, args) {
        message.channel.send(`Server Name: ${message.guild.name}\nTotal Members: ${message.guild.memberCount}\nDate Created: ${message.guild.createdAt}\nServer Region: ${message.guild.region}`);
    },
};

// ╭─────────────────────────────────────────────────────────────────╮
// │                                                                 │
// │                    Written by Kn1ghtTime                        │
// │                   Property of CrusaderBot                       │
// │                                                                 │
// ╰─────────────────────────────────────────────────────────────────╯