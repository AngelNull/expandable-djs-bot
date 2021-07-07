require('dotenv').config();

module.exports = {
    name: 'deploy',
    description: 'Force-deploy all of the slash commands. [Developer]',
    options: [
        {
            name: 'public',
            type: 'BOOLEAN',
            description: 'Deploy commands publically?',
            required: true,
        },
    ],
    ephemeral: true,
    permission: '',
    devOnly: true,
    private: true,
    cooldown: 3,
    execute: async (interaction, handlers, lang, trans) => {
        if (!interaction.client.application?.owner) await interaction.client.application?.fetch();

        const public = interaction.options.get('public')?.value ?? false;

        /* Privately redeploy all commands in the specified test server. Note: this does not apply custom permissions. */
        if (public == false) {
            interaction.editReply({ content: trans('REDEPLOY_START', lang) });
            await interaction.client.guilds.cache.get(process.env.guildID)?.commands.set(interaction.client.commands);
            interaction.editReply({ content: trans('REDEPLOY_PRIVATE', lang) });
            return console.log(trans('REDEPLOY_PRIVATE_DONE', lang));
        } else {
            /* Publically redeploy all commands and apply permissions where needed. */
            interaction.editReply({ content: trans('REDEPLOY_START', lang) });
            await interaction.client.commands.forEach(async (command) => {
                if (!command.private) {
                    await interaction.client.application?.commands.create(command);
                    console.log(trans('REDEPLOY_PUBLIC_CMD', lang, command.name));
                } else {
                    await interaction.client.guilds.cache.get(process.env.guildID)?.commands.create(command);
                    console.log(trans('REDEPLOY_PRIVATE_CMD', lang, command.name));
                }
            });
            interaction.editReply({ content: trans('REDEPLOY_PUBPRIV_DONE', lang) });
            return console.log(trans('REDEPLOY_PUBPRIV_DONE', lang));
        }
    },
};
