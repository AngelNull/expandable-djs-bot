const prompts = require('prompts');
const fs = require('fs');
const config = require('../core/configs/config.json');

require('dotenv').config();

/* The Setup File

This file is ran to configure the bot to provide an easier experience for users 

This file must be updated with new configuration options when the bot is updated, as well as new translations

*/

console.log('-----------------------------------\n          Bot Configuration\n-----------------------------------\n');

const questions = [
    // The bots token
    {
        type: 'text',
        name: 'token',
        message: 'Bot Token?',
        initial: process.env.DISCORD_AUTH_TOKEN || 'https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot',
    },
    // The bots prefix
    {
        type: 'text',
        name: 'prefix',
        message: 'Bot Prefix?',
        initial: config.prefix || '!',
    },
    // The users ID
    {
        type: 'text',
        name: 'ownerID',
        message: 'Owner UserID?',
        initial: config.ownerID || 'https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID',
    },
    // The Bots Language
    // Every time a new translation is added, the option must be added to the choices list below here.
    {
        type: 'select',
        name: 'language',
        message: 'Bot Language?',
        choices: [
            { title: 'English (Source)', value: 'en' },
            { title: 'French (Translation)', value: 'fr' },
            // { title: 'LANG (Translation)', value: 'LANG' },
        ],
        initial: 0,
    },
    // The bots presence
    {
        type: 'select',
        name: 'botStatus',
        message: 'Bot Presence?',
        choices: [
            { title: 'Online', value: 'online' },
            { title: 'Away', value: 'idle' },
            { title: 'Do Not Disturb', value: 'dnd' },
            { title: 'Offline', value: 'offline' },
        ],
        initial: 0,
    },
    // Enable/Disable the bots custom status
    {
        type: 'toggle',
        name: 'enableCustomActivity',
        message: 'Enable playing status?',
        initial: true,
        active: 'true',
        inactive: 'false',
    },
    // Set the bots custom status
    {
        type: (prev) => (prev == true ? 'text' : null),
        name: 'botActivity',
        message: 'Bot Status?',
        initial: config.botActivity || 'Beep Boop',
    },
    // Set the bots custom status type
    {
        type: (prev) => (prev == true || prev.length >= 1 ? 'select' : null),
        name: 'botActivityType',
        message: ' Bot Status Type?',
        choices: [
            { title: 'Playing', value: 'PLAYING' },
            { title: 'Watching', value: 'WATCHING' },
            { title: 'Listening to', value: 'LISTENING' },
            { title: 'Streaming', value: 'STREAMING' },
            { title: 'Competiting in', value: 'COMPETING' },
        ],
        initial: 0,
    },

    // Set the bots streaming URL for the "streaming" status
    {
        type: (prev) => (prev == true || prev == 'STREAMING' ? 'text' : null),
        name: 'streamingURL',
        message: ' Bot Streaming URL?',
        initial: config.streamingURL || 'twitch.tv/youtube.com',
    },

    // Advanced debugging
    {
        type: 'toggle',
        name: 'advancedDebugging',
        message: 'Advanced Debugging?',
        initial: false,
        active: 'yes',
        inactive: 'no',
    },
];

const onCancel = () => {
    console.log('\x1b[31m', "Configuration was cancelled, to start again, use 'npm run config'", '\x1b[0m');
    process.exit(0);
};

(async () => {
    // Get the response from the prompts
    const response = await prompts(questions, { onCancel });
    console.log(`\n-----------------------------------\n          Bot Configured\n-----------------------------------\n\nTo reconfigure, simply do 'npm run config'\n`);

    // Write the bots authentication token
    fs.writeFile('.env', `DISCORD_AUTH_TOKEN = ${response.token}`, (err) => {
        if (err) throw err;
    });
    // Write the configuration for the bot
    fs.writeFile(
        './src/core/configs/config.json',
        `{
        "prefix":"${response.prefix}",
        "ownerID":"${response.ownerID}",
        "language":"${response.language}",
    
        "botStatus":"${response.botStatus}",
        "enableCustomActivity":${response.enableCustomActivity},
        "botActivity":"${response.botActivity || ''}",
        "botActivityType":"${response.botActivityType || ''}",
        "streamingURL":"${response.streamingURL || 'None'}",
    
        "advancedDebugging":${response.advancedDebugging}
}`,
        (err) => {
            if (err) throw err;
        },
    );

    // End of writing
})();
