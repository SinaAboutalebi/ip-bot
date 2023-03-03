//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const steamidResolver = require("steamid-resolver");
const SteamIDpack = require("steamid");
const axios = require("axios");
const pm = require("pretty-ms");
const config = require("../../config.json");

module.exports = {
  name: "messageCreate",
  async execute(message, client) {
    //Prefix Setting =========================================
    const prefix = "?";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();
    //=========================================================
    if (command === "ping") {

        const ping = new EmbedBuilder()
      .setTitle("🏓 Pong!")
      .setColor("#8c6de7")
      .setTimestamp()
      .setDescription(`Api Latency : ${client.ws.ping}`);
     

      message.channel.send({ embeds: [ping] });
    }
    //=========================================================
   
  },
};

//---------------------------🤍🍷 'Zer0Power 🤍🍷---------------------------//
