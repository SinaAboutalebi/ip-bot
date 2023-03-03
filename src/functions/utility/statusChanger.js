//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
const { ActivityType } = require("discord.js");

module.exports = (client) => {
    client.statusChanger = async () => {

        client.user.setStatus("idle");
        client.user.setActivity(`ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ 🤍🍷'ᴢᴇʀ𝟶ᴘᴏᴡᴇʀ`, {
            type: ActivityType.Watching,
        });

    };
};
//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//