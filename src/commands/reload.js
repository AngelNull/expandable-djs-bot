module.exports = {
    name: 'reload',
    description: 'Reload a command file. [Developer]',
    options: [
        {
            name: 'command',
            type: 'STRING',
            description: 'The command to reload',
            required: true,
        },
    ],
    ephemeral: false,
    permission: '',
    devOnly: true,
    private: false,
    cooldown: 2,
    execute: (interaction, handlers, lang, trans) => {
        const commandName = interaction.options.get('command').value;
        /* Fetch the command the author is looking for */
        const command = interaction.client.commands.get(commandName) || interaction.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
        /* If the author passed an invalid command or command alias; return with error message */
        if (!command) return interaction.followUp(trans('COMMAND_NOT_FOUND', lang));
        /* If the command is found, delete the cache for the command and require it again and add it back to the set */
        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            interaction.client.commands.set(newCommand.name, newCommand);
            interaction.followUp(trans('RELOAD_SUCCESS', lang, command.name));
        } catch (error) {
            console.log(error);
            interaction.followUp(trans('RELOAD_ERROR', lang, command.name, error.message));
        }
    },
};
