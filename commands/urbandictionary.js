const fetch = require('node-fetch');
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
        message.channel.send(list[0].definition);
    },
};