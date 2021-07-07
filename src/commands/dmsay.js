require('dotenv').config();

module.exports = {
    name: 'dmsay',
    description: 'Send a direct message to a user. [Developer]',
    options: [
        {
            name: 'member',
            type: 'USER',
            description: 'The member to send a direct message to',
            required: true,
        },
        {
            name: 'message',
            type: 'STRING',
            description: 'The message to send to the member',
            required: true,
        },
    ],
    ephemeral: false,
    permission: '',
    devOnly: true,
    private: false,
    cooldown: 3,
    execute: async (interaction, handlers, lang, trans) => {
        const { member } = interaction.options.get('member');
        const message = interaction.options.get('message').value;

        /* Build the confirmation embed */
        let embed = handlers.embed.loading(trans('DM_PENDING_TITLE', lang), trans('DM_PENDING_DESC', lang, member, message));
        await interaction.editReply({ embeds: [embed] });
        /* Run the confirm reaction function from handlers */
        let confirmReact = await handlers.reacts.confirm(await interaction.fetchReply(), interaction.user.id, embed, true);
        /* If the user confirmed the reaction from the function */
        if (confirmReact == 'confirmed') {
            embed = handlers.embed.success(trans('DM_CONFIRMED_TITLE', lang), trans('DM_CONFIRMED_DESC', lang, member, message), 'https://i.imgur.com/Jg0azl4.gif');
            /* If the user cancelled the reaction from the function */
            await member.send(message).catch(() => {
                embed = handlers.embed.error(trans('DM_FAILED_TITLE', lang), trans('DM_FAILED_DESC', lang, member));
            });
            return interaction.editReply({ embeds: [embed] });
        } else {
            embed.setDescription(trans('DM_CANCELLED', lang));
            return interaction.editReply({ embeds: [embed] });
        }
    },
};
