require('dotenv').config();

module.exports = {
    name: 'serverinfo',
    description: 'Shows information about the server.',
    botPermsNeeded: [],
    userPermsNeeded: [],
    ephemeral: false,
    devOnly: false,
    private: false,
    cooldown: 3,
    execute: async (interaction, handlers, lang, trans) => {
        const embedContent = {
            color: process.env.embedColour,
            title: 'Guild Info',
            thumbnail: {
                url: interaction.guild.iconURL({ dynamic: true }),
            },
            fields: [
                {
                    name: trans('SINFO_GUILD_NAME', lang),
                    value: interaction.guild.name,
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_ID', lang),
                    value: interaction.guild.id,
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_OWNER', lang),
                    value: `<@${interaction.guild.ownerId}>`,
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_MEMBERS', lang),
                    value: interaction.guild.memberCount.toString(),
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_CHANNELS', lang),
                    value: interaction.guild.channels.cache.size.toString(),
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_ROLES', lang),
                    value: interaction.guild.roles.cache.size.toString(),
                    inline: true,
                },
                {
                    name: trans('SINFO_GUILD_CREATEDAT', lang),
                    value: `<t:${Math.floor(interaction.guild.createdTimestamp / 1000)}>`,
                    inline: true,
                },
            ],
        };

        return interaction.followUp({ embeds: [embedContent] });
    },
};
