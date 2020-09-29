const { description, execute } = require("./ping");

module.exports = {
    name: 'args-info',
    description: 'Sends argument info',
    execute(message, args) {
        if (args[0] === 'foo') {
            return message.channel.send('bar');
        }
    
        message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
    },
};