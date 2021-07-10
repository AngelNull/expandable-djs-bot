module.exports = {
    name: 'statistics',
    description: 'Shows statistics for the bot',
    botPermsNeeded: [],
    userPermsNeeded: [],
    ephemeral: true,
    devOnly: false,
    private: false,
    cooldown: 3,
    execute: async (interaction, handlers, lang, trans) => {
        let embed = handlers.embed.loading(trans('LOADING', lang), trans('PLEASE_WAIT', lang));
        await interaction.editReply({ embeds: [embed] });
        embed = handlers.embed.success(trans('STATS_TITLE', lang), trans('STATS_DESCRIPTION', lang, interaction.client.user));
        embed.addFields(
            { name: trans('STATS_GUILDS', lang), value: `\`\`\`${interaction.client.guilds.cache.size}\`\`\``, inline: true },
            { name: trans('STATS_USERS', lang), value: `\`\`\`${await handlers.clientData.botTotalMemberCount()}\`\`\``, inline: true },
            { name: trans('STATS_CHANNELS', lang), value: `\`\`\`${interaction.client.channels.cache.size}\`\`\``, inline: true },
            { name: trans('STATS_UPTIME', lang), value: `\`\`\`${handlers.clientData.botUptime()}\`\`\``, inline: true },
            { name: trans('STATS_WEBSOCKET', lang), value: `\`\`\`${interaction.client.ws.ping}ms\`\`\``, inline: true },
        );
        interaction.editReply({ embeds: [embed] });
    },
};
