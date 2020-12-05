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
    execute: async (message, args) => {
        let user = message.mentions.members.first();
        let invalidUser = false;
        if (!user) {
            /* Fetch a user in the current guild with that UserID */
            user = await message.guild.members.fetch(args[0]).catch(() => {
                invalidUser = true;
            });
        }
        if (invalidUser == true) return message.channel.send('That user could not be found.');

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
                { name: 'Display Name', value: user.displayName, inline: true },
                { name: 'ID', value: user.id, inline: true },
                { name: 'Highest Role', value: user.roles.highest, inline: true },
                { name: 'Joined', value: `${moment(user.joinedAt).fromNow()} (${moment(user.joinedAt).format('MMMM Do YYYY, h:mm:ss a')})`, inline: false },
                { name: 'Created At', value: `${moment(user.user.createdAt).fromNow()} (${moment(user.user.createdAt).format('MMMM Do YYYY, h:mm:ss a')})`, inline: false },
            ],
        };

        return message.channel.send({ embed: embedContent });
    },
};
