module.exports = {
    name: 'reload',
    description: 'Reload a command file.',
    aliases: ['r'],
    args: true,
    usage: '[command]',
    permission: '',
    devOnly: true,
    cooldown: 2,
    execute: (message, handlers, lang, trans, args) => {
        /* Fetch the command the author is looking for */
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
        /* If the author passed an invalid command or command alias; return with error message */
        if (!command) return message.channel.send(trans('COMMAND_NOT_FOUND'));
        /* If the command is found, delete the cache for the command and require it again and add it back to the set */
        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(trans('RELOAD_SUCCESS', lang, command.name));
        } catch (error) {
            console.log(error);
            message.channel.send(trans('RELOAD_ERROR', lang, command.name, error.message));
        }
    },
};
