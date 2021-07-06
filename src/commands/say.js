module.exports = {
    name: 'say',
    description: 'Repeats the given message',
    aliases: ['repeat', 's'],
    args: true,
    usage: '[mesage]',
    permission: '',
    devOnly: true,
    cooldown: 1,
    execute: (message, lang, tr, args) => {
        /* Join all args together */
        let toSend = args.join(' ');
        toSend = toSend.toString();
        /* If the bot has access to manage messages, delete the authors message */
        if (message.guild.me.permissions.has('MANAGE_MESSAGES')) message.delete();
        /* Send the message */
        return message.channel.send(toSend);
    },
};
