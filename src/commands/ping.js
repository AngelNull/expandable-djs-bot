module.exports = {
    name: 'ping',
    description: 'Displays the bots ping',
    aliases: ['p'],
    args: false,
    usage: '',
    permission: '',
    devOnly: false,
    cooldown: 2,
    execute: async (message, lang, tr) => {
        const m = await message.channel.send(tr.translate('PING_PINGING', lang));
        m.edit(tr.translate('PING_RESPONSE', lang, m.createdTimestamp - message.createdTimestamp));
    },
};
