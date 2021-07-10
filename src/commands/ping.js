module.exports = {
    name: 'ping',
    description: 'Calculates the bots ping.',
    botPermsNeeded: [],
    userPermsNeeded: [],
    ephemeral: false,
    devOnly: false,
    private: false,
    cooldown: 2,
    execute: async (interaction, handlers, lang, trans) => {
        interaction.followUp(trans('PING_RESPONSE', lang, interaction.client.ws.ping));
    },
};
