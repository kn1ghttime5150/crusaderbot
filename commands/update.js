const exec = require('child_process').exec
const { OWNERS } = require("../config.json");

module.exports = {
  name: "update",
  description: "Update Recall using git.",
  owner: true,
  async execute(message, args) {
    console.log("[Recall : Update] Command has been run.");

    let owners;
    let msg = message
    const { inspect } = require("util")

    if (!OWNERS.includes(message.author.id)) {
        msg.channel.send("You must be the bot owner to perform this command!")
        return;
    }
    message.channel.send(`**Updating...**`).then(mxg => {
      exec('git pull', {}, (e, o, se) => {
        if(e) {
          console.error("[Recall : Update] " + e);
          return mxg.edit(`Some error occured. Try again later.`);
        }
        mxg.edit('**Update completed.**');
        exec('pm2 reload 7 --update-env')
      });
    });
  }
}
