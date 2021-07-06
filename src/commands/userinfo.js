module.exports = {
    name: 'userinfo',
    description: 'Returns information about a users account',
    aliases: ['whois'],
    args: true,
    usage: '[user]',
    permission: '',
    devOnly: false,
    cooldown: 5,
    execute: async (message, handlers, lang, trans, args) => {
        let user = message.mentions.members.first();
        let invalidUser = false;
        if (!user) {
            /* Fetch a user in the current guild with that UserID */
            user = await message.guild.members.fetch(args[0]).catch(() => {
                invalidUser = true;
            });
        }
        if (invalidUser == true) return message.channel.send(trans('USER_NOT_FOUND', lang));

        /* Building the embed */
        const embedContent = {
            color: user.displayColor,
            author: {
                name: user.user.tag,
            },
            thumbnail: {
                url: user.user.displayAvatarURL({ dynamic: true }),
            },
            fields: [
                {
                    name: trans('UINFO_USER_DISPLAYNAME', lang),
                    value: user.displayName,
                    inline: true,
                },
                {
                    name: trans('UINFO_USER_ID', lang),
                    value: user.id,
                    inline: true,
                },
                {
                    name: trans('UINFO_USER_HIGHESTROLE', lang),
                    value: `<@&${user.roles.highest.id}>`,
                    inline: true,
                },
                {
                    name: trans('UINFO_USER_JOINEDAT', lang),
                    value: `<t:${Math.floor(user.joinedTimestamp / 1000)}>`,
                    inline: true,
                },
                {
                    name: trans('UINFO_USER_CREATEDAT', lang),
                    value: `<t:${Math.floor(user.user.createdTimestamp / 1000)}>`,
                    inline: true,
                },
            ],
        };

        return message.channel.send({ embeds: [embedContent] });
    },
};
