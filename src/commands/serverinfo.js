require('dotenv').config();

module.exports = {
    name: 'serverinfo',
    description: 'Shows information about the server',
    aliases: ['guildinfo', 'guild'],
    args: false,
    usage: '',
    permission: '',
    devOnly: false,
    cooldown: 3,
    execute: async (message, handlers, lang, trans) => {
        const embedContent = {
            color: process.env.embedColour,
            title: 'Guild Info',
            thumbnail: {
                url: message.guild.iconURL({ dynamic: true }),
            },
            fields: [
                {
                    name: trans('SINFO_GUILD_NAME', lang),
                    value: message.guild.name,
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_ID', lang),
                    value: message.guild.id,
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_OWNER', lang),
                    value: `<@${message.guild.ownerId}>`,
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_MEMBERS', lang),
                    value: message.guild.memberCount.toString(),
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_CHANNELS', lang),
                    value: message.guild.channels.cache.size.toString(),
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_ROLES', lang),
                    value: message.guild.roles.cache.size.toString(),
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_CREATEDAT', lang),
                    value: `<t:${Math.floor(message.guild.createdTimestamp / 1000)}>`,
                    inline: true,
                },
            ],
        };

        return message.channel.send({ embeds: [embedContent] });
    },
};
