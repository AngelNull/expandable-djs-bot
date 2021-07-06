module.exports = {
    name: 'ping',
    description: 'Displays the bots ping',
    aliases: ['p'],
    args: false,
    usage: '',
    permission: '',
    devOnly: false,
    cooldown: 2,
    execute: async (message, handlers, lang, trans) => {
        const m = await message.channel.send(trans('PING_PINGING', lang));
        m.edit(trans('PING_RESPONSE', lang, m.createdTimestamp - message.createdTimestamp, message.client.ws.ping));
    },
};
