const { Schema, model } = require("mongoose");
module.exports = model(
    "Queue",
    new Schema(
        {
            guildID: String,
            songlist: {
                type: Map,
                of: String
            }
        }
    )
)