const { Collection } = require('discord.js');
const { ratelimitCooldown, cooldowns, config, translator: tr } = require('../core/core.js');
let lang = config.language;

module.exports = async (client, message) => {
    /* If the author is a bot, or the message was not sent in a guild; return */
    if (message.author.bot || !message.guild) return;

    /* This is where we define arguments, command name and find the command to execute, if no command is found; return */
    const args = message.content.slice(config.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    /* This is where we check if the message starts with the prefix defined in ./core/config.json, if not; return */
    if (message.content.startsWith(config.prefix)) {
        /* Due to the fact you cannot send an Embed unless EMBED_LINKS is granted; the bot will require it */
        if (!message.guild.me.permissions.has('EMBED_LINKS')) return message.channel.send(tr.translate('NEED_EMBED_PERMS', lang));

        /* A messy but easy way to check if the user is spamming the bot; when the user uses a command, the bot will ignore the next command used if it was within a small timeframe */
        if (ratelimitCooldown.has(message.author.id)) return;
        ratelimitCooldown.add(message.author.id);
        setTimeout(() => {
            ratelimitCooldown.delete(message.author.id);
        }, 630);

        /* Check if the user executing the command is the owner of the bot, if not, return it */
        if (command.devOnly && config.ownerID != message.author.id) return message.channel.send(tr.translate('NO_PERMISSION', lang, message.author));

        /* If the command has a permission object, and the user does not have that permission; deny the user from executing the command and return. */
        if (command.permission && !message.member.hasPermission(command.permission)) return message.channel.send(tr.translate('NO_PERMISSION', lang, message.author));

        /* If the command requires args and the user does not pass them; tell the user the correct usage of the command and return */
        if (command.args && !args.length) {
            /* Send the error message; delete the authors message and error message after elapsed time */
            let errmsg = await message.channel.send(tr.translate('INCORRECT_USAGE', lang, config.prefix, commandName, command.usage));
            message.delete({ timeout: 6000 });
            return errmsg.delete({ timeout: 8000 });
        }

        /* Per-Command cooldown is handled here, if a user uses the same command before the cooldown has ended, deny the user from using the command */
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 3) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                let cooldownMessage = await message.channel.send(tr.translate('ON_COOLDOWN', lang, message.author, timeLeft.toFixed(1), command.name));
                message.delete({ timeout: 4000 }).catch(() => {});
                return cooldownMessage.delete({ timeout: 2500 }).catch(() => {
                    return;
                });
            }
        }

        try {
            timestamps.set(message.author.id, now);
            setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

            /* Execute the command */
            command.execute(message, lang, tr, args);
        } catch (error) {
            /* If we end up here; that means the command has failed to execute properly. */
            console.error(error);
            message.channel.send(tr.translate('ERROR_OUTPUT', lang));
        }
    }
};
