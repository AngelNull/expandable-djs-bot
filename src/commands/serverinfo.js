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
    execute: (message) => {
        const embedContent = {
            color: process.env.embedColour,
            title: message.guild.name,
            thumbnail: {
                url: message.guild.iconURL({ dynamic: true }),
            },
            footer: {
                text: `Created At: ${message.guild.createdAt}`,
            },
            fields: [
                { name: 'Guild Name', value: message.guild.name, inline: true },
                { name: 'Guild ID', value: message.guild.id, inline: true },
                { name: 'Owner', value: message.guild.owner, inline: true },
                { name: 'Members', value: message.guild.memberCount, inline: true },
                { name: 'Channels', value: message.guild.channels.cache.size, inline: true },
                { name: 'Roles', value: message.guild.roles.cache.size, inline: true },
            ],
        };

        return message.channel.send({ embed: embedContent });
    },
};
