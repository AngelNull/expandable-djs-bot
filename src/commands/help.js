const { embedColour } = require('../core/configs/embedcolours.json');
const { prefix } = require('../core/configs/config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows a list of commands or details about a specific command',
    aliases: ['h', 'commands'],
    args: false,
    usage: '[command]',
    permission: '',
    devOnly: false,
    cooldown: 3,
    execute: async (message, lang, tr, args) => {
        /* If the user does not provide any args; send them the generic help message in direct messages instead */
        if (args.length == 0) {
            const helpList = new Discord.MessageEmbed();
            /* Build the embed */
            helpList.setTitle(tr.translate('HELP_TITLE', lang));
            helpList.setDescription(tr.translate('HELP_DESCRIPTION', lang, message.client.user.username));
            helpList.addField(tr.translate('HELP_COMMANDS', lang), `[${tr.translate('CLICK_HERE', lang)}](https://github.com/AngelNull/expandable-djs-bot/tree/main/commands)`, true);
            helpList.addField(tr.translate('HELP_BUGS_FEATURES', lang), `[${tr.translate('CLICK_HERE', lang)}](https://github.com/AngelNull/expandable-djs-bot/issues)`, true);
            helpList.addField(tr.translate('HELP_GITHUB_REPO', lang), `[${tr.translate('CLICK_HERE', lang)}](https://github.com/AngelNull/expandable-djs-bot)`, true);
            helpList.setThumbnail(message.client.user.displayAvatarURL({ dynamic: true, size: 256 }));
            helpList.setColor(embedColour);
            /* Send the embed to the user; if the user has direct messages closed, react to the original message with a cross, otherwise with a tick */
            return await message.author
                .send(helpList)
                .then(() => {
                    return message.react('✅').catch(() => {
                        return;
                    });
                })
                .catch(() => {
                    return message.react('❎').catch(() => {
                        return;
                    });
                });
        }

        /* Create an empty array for data and fetch the commands for the bot */
        const data = [];
        const { commands } = message.client;

        /* Find the command the user is looking for in the client commands list from the client*/
        let name = args[0];
        name = name.toLowerCase();
        const command = commands.get(name) || commands.find((c) => c.aliases && c.aliases.includes(name));

        /* If the command could not be found, return an error message */
        if (!command) return message.channel.send(tr.translate('INVALID COMMAND', lang));

        /* Build a new embed for the command help message and push all applicable data to the array*/

        const embed = new Discord.MessageEmbed().setTitle(`Command: ${args[0].toLowerCase().capitalize()}`).setColor(embedColour);
        if (command.description) data.push(`${command.description}\n`);
        if (command.aliases) data.push(`**Aliases:** ${command.name}, ${command.aliases.join(', ')}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${args[0].toLowerCase()} ${command.usage}`);
        if (command.permission) data.push(`**Permission:** ${command.permission} | ${command.rolePermission}`);
        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
        embed.setDescription(data);
        message.channel.send(embed);
    },
};

/* Capitalise Function */
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
