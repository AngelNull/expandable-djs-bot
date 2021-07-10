require('dotenv').config();

module.exports = {
    name: 'avatar',
    description: 'Displays the full version of a users avatar',
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'The user to fetch the avatar of',
            required: true,
        },
    ],
    botPermsNeeded: ['EMBED_LINKS'],
    userPermsNeeded: [],
    ephemeral: false,
    devOnly: false,
    private: false,
    cooldown: 3,
    execute: async (interaction, handlers, lang, trans) => {
        const { member } = interaction.options.get('user');

        /* User Found */
        let embed = handlers.embed.imageNoText(trans('USERS_AVATAR', lang, member.user.tag), member.user.displayAvatarURL({ dynamic: true, size: 2048 }), interaction.user);
        await interaction.followUp({ embeds: [embed] });
    },
};
