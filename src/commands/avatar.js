require('dotenv').config();

module.exports = {
    name: 'avatar',
    description: 'Displays the full version of a users avatar',
    aliases: ['pfp', 'avi'],
    args: true,
    usage: '[user]',
    permission: '',
    devOnly: false,
    cooldown: 3,
    execute: async (message, handlers, lang, trans, args) => {
        /* Finding the user */
        let user = message.mentions.members.first();
        let userid = args[0];
        if (!user && !userid) return;

        /* Resolving from an ID */
        let isError = false;
        if (!user) {
            isError = false;
            user = await message.guild.members.fetch(userid).catch((_) => {
                isError = true;
            });
        }
        /* User not found */
        if (isError) return message.channel.send(trans('USER_NOT_FOUND', lang));

        if (user) {
            /* User Found */
            let embed = handlers.embed.imageNoText(trans('USERS_AVATAR', lang, user.user.tag), user.user.displayAvatarURL({ dynamic: true, size: 2048 }), message.author);
            message.channel.send({ embeds: [embed] });
        }
    },
};
