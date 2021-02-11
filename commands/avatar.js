module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp'],
    description: 'displays the avatars of the mentioned user(s)',
    execute(message, args) {
        var member = message.mentions.members.first()
        console.log(member)
        message.channel.send(member.user.avatarURL())

    },
};