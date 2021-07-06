const Discord = require('discord.js');
const translator = require('../i18n/translator.js');
const { structureIntents } = require('../handlers/intents/intentHandler.js');

const client = new Discord.Client({
    disableMentions: 'everyone',
    shards: 'auto',
    intents: structureIntents(),
    partials: ['GUILD_MEMBER'],
});

const ratelimitCooldown = new Set();

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

client.login(process.env.DISCORD_AUTH_TOKEN);

module.exports = { client, ratelimitCooldown, cooldowns, translator };
