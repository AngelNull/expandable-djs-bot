require('dotenv').config();

module.exports = {
    name: 'dmsay',
    description: 'Sends a direct message to the specified user id',
    aliases: ['saydm', 'tell'],
    args: true,
    usage: '[user] [message]',
    permission: '',
    devOnly: true,
    cooldown: 1,
    execute: async (message, handlers, lang, trans, args) => {
        /* Set up the embed */
        let sendToUser = args[0];
        let user = await message.client.users.cache.get(sendToUser);

        /* If the user could not be found in the client's user cache return an error */
        if (!user) return message.channel.send(trans('USER_NOT_FOUND', lang));
        args.shift();
        args = args.join(' ');

        if (sendToUser) {
            /* Build the confirmation embed */
            let embed = handlers.embed.loading(trans('DM_PENDING_TITLE', lang), trans('DM_PENDING_DESC', lang, user, args));
            let confirmMessage = await message.channel.send({ embeds: [embed] });
            /* Run the confirm reaction function from handlers */
            let confirmReact = await handlers.reacts.confirm(confirmMessage, message.author.id, embed);
            /* If the user confirmed the reaction from the function */
            if (confirmReact == 'confirmed') {
                message.delete().catch();
                embed = handlers.embed.success(trans('DM_CONFIRMED_TITLE', lang), trans('DM_CONFIRMED_DESC', lang, user, args), 'https://i.imgur.com/Jg0azl4.gif');
                /* If the user cancelled the reaction from the function */
                await user.send(args).catch(() => {
                    embed = handlers.embed.error(trans('DM_FAILED_TITLE', lang), trans('DM_FAILED_DESC'), lang, user);
                });
                return confirmMessage.edit({ embeds: [embed] });
            } else {
                embed.setDescription(trans('DM_CANCELLED', lang));
                return confirmMessage.edit({ embeds: [embed] });
            }
        } else {
            message.delete().catch();
            return message.reply(trans('ERROR_OUTPUT', lang));
        }
    },
};
