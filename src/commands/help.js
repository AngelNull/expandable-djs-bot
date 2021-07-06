const Discord = require('discord.js');
require('dotenv').config();

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
        if (!args[0]) {
            /* Setup the help embed, and set all the basics needed for it. */
            const helpList = new Discord.MessageEmbed()
                .setDescription(tr.translate('HELP_DESCRIPTION', lang, message.client.user.username))
                .setTitle(tr.translate('HELP_TITLE', lang))
                .setColor(process.env.embedColour)
                .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true, size: 256 }));

            if (process.env.isOpensource === 'true') {
                /* If the bot is opensource, add extra links so users can find the repository */
                helpList.addFields(
                    { name: tr.translate('HELP_COMMANDS', lang), value: `[${tr.translate('CLICK_HERE', lang)}](${process.env.docsCommandsLocation})`, inline: true },
                    { name: tr.translate('HELP_SUPPORT', lang), value: `[${tr.translate('CLICK_HERE', lang)}](${process.env.docsSupportLocation})`, inline: true },
                    { name: tr.translate('HELP_REPOSITORY', lang), value: `[${tr.translate('CLICK_HERE', lang)}](${process.env.docsRepoLocation})`, inline: true },
                );
            } else if (process.env.docsSupportLocation !== 'unset') {
                /* If the bot is not opensource, but has a support location set, add it as a link. */
                helpList.addField(tr.translate('HELP_SUPPORT', lang), `[${tr.translate('CLICK_HERE', lang)}](${process.env.docsSupportLocation})`, true);
            } else {
                /* If the bot has no links configured, add a field saying no links are configured */
                helpList.addField(tr.translate('HELP_NO_LINKS_TITLE', lang), tr.translate('HELP_NO_LINKS_DESCRIPTION', lang), true);
            }

            /* Send the embed to the user; if the user has direct messages closed, react to the original message with a cross, otherwise with a tick */
            return message.author
                .send({ embeds: [helpList] })
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
        if (!command) return message.channel.send(tr.translate('COMMAND_NOT_FOUND', lang));

        /* Build a new embed for the command help message and push all applicable data to the array*/

        const embed = new Discord.MessageEmbed().setTitle(`Command: ${args[0].toLowerCase().capitalize()}`).setColor(process.env.embedColour);
        if (command.devOnly) embed.setTitle(`Command: ${args[0].toLowerCase().capitalize()} - Developer Only`);
        if (command.description) data.push(`${command.description}\n`);
        if (command.aliases) data.push(`**Aliases:** ${command.name}, ${command.aliases.join(', ')}`);
        if (command.usage) data.push(`**Usage:** ${process.env.prefix}${args[0].toLowerCase()} ${command.usage}`);
        if (command.permission) data.push(`**Permission:** ${command.permission}`);
        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);
        embed.setDescription(data);
        message.channel.send({ embeds: [embed] });
    },
};

/* Capitalise Function */
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
