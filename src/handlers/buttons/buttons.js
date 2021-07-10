require('dotenv').config();
const { MessageButton, MessageActionRow } = require('discord.js');
const handlers = require('..');

/**
 * This function sets up a "confirm/cancel" button event on the given message, this handles all compontent adding and removing.
 * @param {Message} interaction The interaction to add the buttons to
 * @param {String} userID The user id to allow to react
 * @param {MessageEmbed} embed The MessageEmbed to edit with the result
 */
const confirmation = async (interaction, userID, embed) => {
    const lang = handlers.i18n.lang();

    const row = new MessageActionRow().addComponents(
        new MessageButton().setCustomId('confirm').setLabel(handlers.i18n.translate('BUTTON_CONFIRM', lang)).setStyle('SUCCESS'),
        new MessageButton().setCustomId('cancel').setLabel(handlers.i18n.translate('BUTTON_CANCEL', lang)).setStyle('DANGER'),
    );

    await interaction.editReply({ components: [row] });

    const filter = (i) => {
        if (i.user.id !== userID) i.reply({ content: handlers.i18n.translate('NO_PERMISSION', lang, i.user), ephemeral: true });
        return i.user.id === userID;
    };

    let isConfirmed = false;

    await interaction.channel
        .awaitMessageComponent({ filter, time: 20000, errors: ['time'] })
        .then(async (i) => {
            if (i.customId == 'confirm') {
                await interaction.editReply({ embeds: [embed], components: [] });
                isConfirmed = true;
            } else {
                await interaction.editReply({ embeds: [embed], components: [] });
                isConfirmed = false;
            }

            return isConfirmed;
        })
        .catch(async () => {
            await interaction.editReply({ embeds: [embed], components: [] });
            isConfirmed = false;
        });

    return isConfirmed;
};

module.exports = { confirmation };
