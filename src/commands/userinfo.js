module.exports = {
    name: 'userinfo',
    description: 'Returns information about a users account.',
    options: [
        {
            name: 'user',
            type: 'USER',
            description: 'The member to get information for',
            required: true,
        },
    ],
    botPermsNeeded: [],
    userPermsNeeded: [],
    ephemeral: false,
    devOnly: false,
    private: false,
    cooldown: 5,
    execute: async (interaction, handlers, lang, trans) => {
        const { member } = interaction.options.get('user');

        /* Building the embed */
        const embedContent = {
            color: member.displayColor,
            author: {
                name: member.user.tag,
            },
            thumbnail: {
                url: member.user.displayAvatarURL({ dynamic: true }),
            },
            fields: [
                {
                    name: trans('UINFO_USER_DISPLAYNAME', lang),
                    value: member.displayName,
                    inline: true,
                },
                {
                    name: trans('UINFO_USER_ID', lang),
                    value: member.id,
                    inline: true,
                },
                {
                    name: trans('UINFO_USER_HIGHESTROLE', lang),
                    value: `<@&${member.roles.highest.id}>`,
                    inline: true,
                },
                {
                    name: trans('UINFO_USER_JOINEDAT', lang),
                    value: `<t:${Math.floor(member.joinedTimestamp / 1000)}>`,
                    inline: true,
                },
                {
                    name: trans('UINFO_USER_CREATEDAT', lang),
                    value: `<t:${Math.floor(member.user.createdTimestamp / 1000)}>`,
                    inline: true,
                },
            ],
        };

        return interaction.followUp({ embeds: [embedContent] });
    },
};
