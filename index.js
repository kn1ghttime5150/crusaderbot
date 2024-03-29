const fs = require('fs');
const Discord = require('discord.js');
const {InfluxDB} = require('@influxdata/influxdb-client')
require("dotenv").config()

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    const token = process.env.INFLUX
    const org = 'konr5150@gmail.com'
    const bucket = 'konr5150\'s Bucket'

    const client = new InfluxDB({url: 'https://eastus-1.azure.cloud2.influxdata.com', token: token})
        console.log("Connected to Database!")
});

client.on('debug', (e) => {
    console.log(e)
})
client.on('guildMemberAdd', (guild, member) => {
    member.roles.add(guild.roles.cache.get('637676787383533588')
    )})
client.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
    
    if (command.guildOnly && message.channel.type === 'dm') {
	return message.reply('I can\'t execute that command inside DMs!');
}

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${process.env.PREFIX}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	    if (now < expirationTime) {
		    const timeLeft = (expirationTime - now) / 1000;
		    return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
	    }
    }
    
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

try {
	command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
});

client.login(process.env.TOKEN);

// ╭─────────────────────────────────────────────╮
// │                                             │
// │            Written by Kn1ghtTime            │
// │           Property of crusaderbot           │
// │                                             │
// ╰─────────────────────────────────────────────╯
//   /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\
//  /                                          \
// |                    /|\                     |
// |                   / | \                    |
// |                  /  |  \                   |
// |                 |   |   |                  |
// |                 |   |   |                  |
// |   /¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯|¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯\   |
// |  |   ███████████    |    ███████████    |  |
// |   \_________________|__________________/   |
// |                 |   |   |                  |
// |     ●  ●  ●  ●  |   |   |  ●  ●  ●  ●      |
// |  ●  ●  ●  ●  ●  |   |   |  ●  ●  ●  ●  ●   |
// |  ●  ●  ●  ●  ●  |   |   |  ●  ●  ●  ●  ●   |
// |  ●  ●  ●  ●  ●  |   |   |  ●  ●  ●  ●  ●   |
// |  ●  ●  ●  ●  ●  |   |   |  ●  ●  ●  ●  ●   |
// |     ●  ●  ●  ●  |   |   |  ●  ●  ●  ●      |
// |                 |   |   |                  |
// |                  \  |  /                   |
// |                   \ | /                    |
// |                    \|/                     |
// |                                            |
//  \__________________________________________/