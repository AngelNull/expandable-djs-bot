require('dotenv').config();

module.exports = {
    name: 'help',
    description: 'Shows a help embed or gives information about a command.',
    options: [
        {
            name: 'command',
            type: 'STRING',
            description: 'The command to get help for',
            required: false,
        },
    ],
    botPermsNeeded: ['EMBED_LINKS'],
    userPermsNeeded: [],
    ephemeral: true,
    devOnly: false,
    private: false,
    cooldown: 3,
    execute: async (interaction, handlers, lang, trans) => {
        /* If the user does not provide a cmd; send them the generic help message in direct messages instead */
        if (!interaction.options?.get('command')?.value) {
            /* Setup the help embed, and set all the basics needed for it. */
            const helpList = handlers.embed.basic(
                trans('HELP_TITLE', lang),
                trans('HELP_DESCRIPTION', lang, interaction.client.user.username),
                interaction.client.user.displayAvatarURL({ dynamic: true }),
            );
            if (process.env.isOpensource === 'true') {
                /* If the bot is opensource, add extra links so users can find the repository */
                helpList.addFields(
                    { name: trans('HELP_COMMANDS', lang), value: `[${trans('CLICK_HERE', lang)}](${process.env.docsCommandsLocation})`, inline: true },
                    { name: trans('HELP_SUPPORT', lang), value: `[${trans('CLICK_HERE', lang)}](${process.env.docsSupportLocation})`, inline: true },
                    { name: trans('HELP_REPOSITORY', lang), value: `[${trans('CLICK_HERE', lang)}](${process.env.docsRepoLocation})`, inline: true },
                );
            } else if (process.env.docsSupportLocation !== 'unset') {
                /* If the bot is not opensource, but has a support location set, add it as a link. */
                helpList.addField(trans('HELP_SUPPORT', lang), `[${trans('CLICK_HERE', lang)}](${process.env.docsSupportLocation})`, true);
            } else {
                /* If the bot has no links configured, add a field saying no links are configured */
                helpList.addField(trans('HELP_NO_LINKS_TITLE', lang), trans('HELP_NO_LINKS_DESCRIPTION', lang), true);
            }

            /* Send the embed to the user; if the user has direct messages closed, react to the original message with a cross, otherwise with a tick */
            return interaction.user
                .send({ embeds: [helpList] })
                .then(() => {
                    interaction.followUp({ content: trans('HELP_SENT', lang) });
                })
                .catch(() => {
                    interaction.followUp({ content: trans('HELP_DMS_CLOSED', lang) });
                });
        } else {
            /* Create an empty array for data and fetch the commands for the bot */
            const data = [];
            const { commands } = interaction.client;

            /* Find the command the user is looking for in the client commands list from the client*/
            let name = interaction.options?.get('command').value.toString();
            name = name.toLowerCase();
            const command = commands.get(name) || commands.find((c) => c.aliases && c.aliases.includes(name));

            /* If the command could not be found, return an error message */
            if (!command) return interaction.followUp(trans('COMMAND_NOT_FOUND', lang));

            /* Build a new embed for the command help comma and push the data */
            data.push(`\n**Description**: ${trans(`${command.name.toUpperCase()}_DESCRIPTION`, lang)}`);
            data.push(`\n**User Permissions:** \`${command.userPermsNeeded.join(', ') || 'N/A'}\``);
            data.push(`\n**Bot Permissions:** \`${command.botPermsNeeded.join(', ') || 'N/A'}\``);
            data.push(`\n**Cooldown:** ${command.cooldown || 3} second(s)`);

            const embed = handlers.embed.basic(`Command: ${name.toLowerCase().capitalize()}`, data.toString());
            interaction.followUp({ embeds: [embed] });
        }
    },
};

/* Capitalise Function */
String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};
