/*require("dotenv").config();
const queueSchema = require("../models/queue")
const ytdl = require("ytdl-core");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(process.env.YOUTUBE_API_KEY);

module.exports = {
  name: "play",
  cooldown: 3,
  aliases: ["p", "yt"],
  description: "Plays music",
  async execute(message, args) {
    let newqueue = new queueSchema(
        {
            guildID: message.guild.id,
            /*songlist: {
                type: Map,
                of: String
            }
        }
    )
    newqueue.save()

    queueSchema.findOne({ guildID: message.guild.id }, async (error, database)=>{
        console.log(database)
    })
  }
}
*/
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