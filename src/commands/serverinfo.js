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
    execute: (message, lang, tr) => {
        const embedContent = {
            color: process.env.embedColour,
            title: message.guild.name,
            thumbnail: {
                url: message.guild.iconURL({ dynamic: true }),
            },
            footer: {
                text: tr.translate('SINFO_GUILD_CREATEDAT', lang, message.guild.createdAt),
            },
            fields: [
                {
                    name: tr.translate('SINFO_GUILD_NAME', lang),
                    value: message.guild.name,
                    inline: true,
                },
                {
                    name: tr.translate('SINFO_GUILD_ID', lang),
                    value: message.guild.id,
                    inline: true,
                },
                {
                    name: tr.translate('SINFO_GUILD_OWNER', lang),
                    value: message.guild.owner,
                    inline: true,
                },
                {
                    name: tr.translate('SINFO_GUILD_MEMBERS', lang),
                    value: message.guild.memberCount,
                    inline: true,
                },
                {
                    name: tr.translate('SINFO_GUILD_CHANNELS', lang),
                    value: message.guild.channels.cache.size,
                    inline: true,
                },
                {
                    name: tr.translate('SINFO_GUILD_ROLES', lang),
                    value: message.guild.roles.cache.size,
                    inline: true,
                },
            ],
        };

        return message.channel.send({ embed: embedContent });
    },
};
