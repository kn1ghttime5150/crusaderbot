module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    description: 'displays the avatars of the mentioned user(s)',
    execute(message, args) {
        message.channel.send(message.author.avatarURL())

    },
};