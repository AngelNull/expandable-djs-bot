const Discord = require('discord.js');
const { translate, lang } = require('../handlers/language/translator');
const { structureIntents } = require('../handlers/intents/intentHandler.js');

const client = new Discord.Client({
    disableMentions: 'everyone',
    shards: 'auto',
    intents: structureIntents(),
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
});

const ratelimitCooldown = new Set();

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

client.login(process.env.DISCORD_AUTH_TOKEN);

module.exports = { client, ratelimitCooldown, cooldowns, translate, lang };
