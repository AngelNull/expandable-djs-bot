const Discord = require('discord.js');
const config = require('./configs/config.json');
const translator = require('../translations/translator.js');

const client = new Discord.Client({
    disableMentions: 'everyone',
    shards: 'auto',
});

const ratelimitCooldown = new Set();

const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

client.login(process.env.DISCORD_AUTH_TOKEN);

module.exports = { client, ratelimitCooldown, cooldowns, config, translator };
