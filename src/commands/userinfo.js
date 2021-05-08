var moment = require('moment');

module.exports = {
    name: 'userinfo',
    description: 'Returns information about a users account',
    aliases: ['whois'],
    args: true,
    usage: '[user]',
    permission: '',
    devOnly: false,
    cooldown: 5,
    execute: async (message, lang, tr, args) => {
        let user = message.mentions.members.first();
        let invalidUser = false;
        if (!user) {
            /* Fetch a user in the current guild with that UserID */
            user = await message.guild.members.fetch(args[0]).catch(() => {
                invalidUser = true;
            });
        }
        if (invalidUser == true) return message.channel.send(tr.translate('USER_NOT_FOUND', lang));

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
                    name: tr.translate('UINFO_USER_DISPLAYNAME', lang),
                    value: user.displayName,
                    inline: true,
                },
                {
                    name: tr.translate('UINFO_USER_ID', lang),
                    value: user.id,
                    inline: true,
                },
                {
                    name: tr.translate('UINFO_USER_HIGHESTROLE', lang),
                    value: user.roles.highest,
                    inline: true,
                },
                {
                    name: tr.translate('UINFO_USER_JOINEDAT', lang),
                    value: `${moment(user.joinedAt).fromNow()} (${moment(user.joinedAt).format('MMMM Do YYYY, h:mm:ss a')})`,
                    inline: false,
                },
                {
                    name: tr.translate('UINFO_USER_CREATEDAT', lang),
                    value: `${moment(user.user.createdAt).fromNow()} (${moment(user.user.createdAt).format('MMMM Do YYYY, h:mm:ss a')})`,
                    inline: false,
                },
            ],
        };

        return message.channel.send({ embed: embedContent });
    },
};
