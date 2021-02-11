const fetch = require('node-fetch');
var Discord = require('discord.js')
const querystring = require('querystring');
module.exports = {
    name: 'urbandictionary',
    aliases: ['urban', 'ud'],
    description: 'Gives an Urban Dictionary definition based on a search term',
    async execute(message, args) {
        if (!args.length) {
            return message.channel.send('You need to supply a search term!');
          }
        
            const query = querystring.stringify({ term: args.join(' ') });
        
          const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
        if (!list.length) {
          
            return message.channel.send(`No results found for **${args.join(' ')}**.`);
        }
        console.log(list[0])
        var embed = new Discord.MessageEmbed()
          .setTitle('UD Definition')
          .setColor('#ffcc00')
          .setDescription(list[0].definition)
          .setAuthor(list[0].author)
          .addField('Example', list[0].example)
        message.channel.send(embed)
    },
};