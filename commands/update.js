const exec = require('child_process').exec
const { OWNERS } = require("dotenv").config();

module.exports = {
  name: "update",
  description: "Update CrusaderBot using git.",
  owner: true,
  async execute(message, args) {
    console.log("[CrusaderBot : Update] Command has been run.");

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
          console.error("[CrusaderBot : Update] " + e);
          return mxg.edit(`Some error occured. Try again later.`);
        }
        mxg.edit('**Update completed.**');
        exec('pm2 reload 7 --update-env')
      });
    });
  }
}

// ╭─────────────────────────────────────────────────────────────────╮
// │                                                                 │
// │                    Written by Kn1ghtTime                        │
// │                   Property of CrusaderBot                       │
// │                                                                 │
// ╰─────────────────────────────────────────────────────────────────╯