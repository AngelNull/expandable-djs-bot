module.exports = {
    name: 'say',
    description: 'Repeats the given message. [Developer]',
    options: [
        {
            name: 'message',
            type: 'STRING',
            description: 'The message to send',
            required: true,
        },
    ],
    botPermsNeeded: [],
    userPermsNeeded: [],
    ephemeral: true,
    devOnly: true,
    private: false,
    cooldown: 1,
    execute: (interaction) => {
        let toSend = interaction.options.get('message').value;
        /* Tell the author the message is being sent */
        interaction.editReply("Psst, I've sent your message into chat.");
        /* Send the message */
        return interaction.channel.send(toSend);
    },
};
