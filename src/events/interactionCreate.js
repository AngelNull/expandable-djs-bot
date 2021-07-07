const { Collection } = require('discord.js');
const { ratelimitCooldown, cooldowns, translate: trans, lang: figureLang } = require('../client/core.js');
const handlers = require('../handlers');
let lang = figureLang();
require('dotenv').config();

module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return;

    /* If the author is a bot, or the message was not sent in a guild; return */
    if (interaction.user.bot || !interaction.guild) return;

    /* Due to the fact you cannot send an Embed unless EMBED_LINKS is granted; the bot will require it */
    if (!interaction.guild.me.permissions.has('EMBED_LINKS')) return interaction.reply(trans('NEED_PERMS', lang, 'EMBED_LINKS'));

    const commandName = interaction.commandName;
    const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    /* A messy but easy way to check if the user is spamming the bot; when the user uses a command, the bot will ignore the next command used if it was within a small timeframe */
    if (ratelimitCooldown.has(interaction.user.id)) return;
    ratelimitCooldown.add(interaction.user.id);
    setTimeout(() => {
        ratelimitCooldown.delete(interaction.user.id);
    }, 630);

    /* Check if the user executing the command is the owner of the bot, if not, return it */
    if (command.devOnly && process.env.ownerID != interaction.user.id) return interaction.reply({ content: trans('NO_PERMISSION', lang, interaction.user), ephemeral: true });

    /* If the command has a permission object, and the user does not have that permission; deny the user from executing the command and return. */
    if (command.permission && !interaction.member.permissions.has(command.permission)) return interaction.reply({ content: trans('NO_PERMISSION', lang, interaction.user), ephemeral: true });

    /* Per-Command cooldown is handled here, if a user uses the same command before the cooldown has ended, deny the user from using the command */
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(interaction.user.id)) {
        const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            await interaction.reply({ content: trans('ON_COOLDOWN', lang, interaction.user, timeLeft.toFixed(1), command.name), ephemeral: true });
        }
    }

    try {
        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

        /* Execute the command */
        await interaction.defer({ ephemeral: command.ephemeral });
        command.execute(interaction, handlers, lang, trans);
    } catch (error) {
        /* If we end up here; that means the command has failed to execute properly. */
        console.error(error);
        interaction.reply(trans('ERROR_OUTPUT', lang));
    }
};
