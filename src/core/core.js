const Discord = require('discord.js');
const translator = require('../translations/translator.js');

const client = new Discord.Client({
    disableMentions: 'everyone',
    shards: 'auto',
    intents: ['DIRECT_MESSAGES', 'GUILDS', 'GUILD_MEMBERS', 'GUILD_INVITES', 'GUILD_PRESENCES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_MESSAGES'],
    partials: ['GUILD_MEMBER'],
});

const ratelimitCooldown = new Set();

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

client.login(process.env.DISCORD_AUTH_TOKEN);

module.exports = { client, ratelimitCooldown, cooldowns, translator };
