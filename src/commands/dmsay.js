const { MessageEmbed } = require('discord.js');
const utils = require('../utils/');
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
    execute: async (message, lang, tr, args) => {
        /* Set up the embed */
        let embed = new MessageEmbed().setColor(process.env.successColour);
        let sendToUser = args[0];
        let user = await message.client.users.cache.get(sendToUser);

        /* If the user could not be found in the client's user cache return an error */
        if (!user) return message.channel.send(tr.translate('USER_NOT_FOUND', lang));
        args.shift();
        args = args.join(' ');

        if (sendToUser) {
            /* Build the confirmation embed */
            embed.setTitle(tr.translate('DM_PENDING_TITLE'), lang);
            embed.setDescription(tr.translate('DM_PENDING_DESC', lang, user, args));
            embed.setColor(process.env.embedColour);
            let confirmMessage = await message.channel.send({ embeds: [embed] });
            /* Run the confirm reaction function from utils */
            let confirmReact = await utils.reacts.confirm(confirmMessage, message.author.id, embed);
            /* If the user confirmed the reaction from the function */
            if (confirmReact == 'confirmed') {
                message.delete().catch();
                embed.setTitle(tr.translate('DM_CONFIRMED_TITLE'));
                embed.setDescription(tr.translate('DM_CONFIRMED_DESC', lang, user, args));
                embed.setThumbnail(`https://i.imgur.com/Jg0azl4.gif`);
                /* If the user cancelled the reaction from the function */
                await user.send(args).catch(() => {
                    embed.setTitle(tr.translate('DM_FAILED_TITLE'));
                    embed.setDescription(tr.translate('DM_FAILED_DESC', lang, user));
                    embed.setColor(process.env.errorColour);
                    embed.setThumbnail('');
                });
                return confirmMessage.edit({ embeds: [embed] });
            } else {
                embed.setDescription(tr.translate('DM_CANCELLED', lang));
                return confirmMessage.edit({ embeds: [embed] });
            }
        } else {
            message.delete().catch();
            return message.reply(tr.translate('ERROR_OUTPUT', lang));
        }
    },
};
