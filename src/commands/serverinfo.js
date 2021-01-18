const { MessageEmbed } = require('discord.js');
const { embedColour } = require('../core/configs/embedcolours.json');
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
        const embed = new MessageEmbed();
        embed.setColor(embedColour);
        embed.setTitle('Server Info');
        embed.addField('Guild Name', message.guild.name, true);
        embed.addField('Guild ID', message.guild.id, true);
        embed.addField('Owner', message.guild.owner, true);
        embed.addField('Members', message.guild.memberCount, true);
        embed.addField('Channels', message.guild.channels.cache.size, true);
        embed.addField('Roles', message.guild.roles.cache.size, true);
        embed.setFooter(`Creation Date: ${message.guild.createdAt}`);
        embed.setThumbnail(message.guild.iconURL({ dynamic: true }));
        message.channel.send(embed);
    },
};
