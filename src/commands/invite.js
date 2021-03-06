const Discord = require('discord.js');
const { embedColour, errorColour } = require('../core/configs/embedcolours.json');
const request = require('snekfetch');

module.exports = {
    name: 'invite',
    description: 'Resolves a given invite link or code and provides information about the invite',
    aliases: ['invfo', 'inviteinfo'],
    args: true,
    usage: '[invite]',
    permission: 'KICK_MEMBERS',
    devOnly: false,
    cooldown: 6,
    execute: async (message, lang, tr, args) => {
        let inviteCode = args[0];
        const embed = new Discord.MessageEmbed().setColor(embedColour);

        /* Do some small checks to see if the invite is valid ourselves to prevent hitting the API immediately. */
        if (Number.isInteger(inviteCode) || inviteCode.length < 1) {
            embed.setTitle('Invalid Invite');
            embed.setDescription('That invite looks invalid. Please double check it.');
            return message.channel.send(embed);
        }

        /* Replace everything apart from the invite code so we can query the API with it */
        inviteCode = inviteCode.replace('discord.gg/', '').replace('discordapp.com/invites/', '').replace('https://', '').replace('www.', '');

        /* Use snekfetch to send a request to the API */
        let isError = false;
        const { body } = await request.get(`https://discordapp.com/api/v6/invites/${inviteCode}`).catch(() => {
            /* The invite is not valid, and therefore the user must be told as such */
            isError = true;
            embed.setTitle('Invalid Invite');
            embed.setDescription('Could not find information for that invite, it is likely invalid or has expired.');
            embed.setColor(errorColour);
            return message.channel.send(embed);
        });

        if (isError) return;

        /* If the guild does not have a vanity url, therefore does not need any extra treatment */
        if (!body.guild.vanity_url_code) {
            embed.setTitle(`Invite Information - ${inviteCode}`);
            embed.addFields(
                { name: 'Guild', value: `${body.guild.name}`, inline: true },
                { name: 'Inviter', value: `${body.inviter.username}#${body.inviter.discriminator}`, inline: true },
                { name: 'Channel', value: `${body.channel.name}`, inline: true },
                { name: 'Guild ID', value: `${body.guild.id}`, inline: true },
                { name: 'Inviter ID', value: `${body.inviter.id}`, inline: true },
                { name: 'Channel ID', value: `${body.channel.id}`, inline: true },
            );
            return message.channel.send(embed);
        } else {
            /* If the guild does have a vanity url, it needs to be treated differently */
            embed.addFields(
                { name: 'Guild', value: `${body.guild.name}`, inline: true },
                { name: 'Channel', value: `${body.channel.name}`, inline: true },
                { name: 'Vanity URL', value: `${body.guild.vanity_url_code}`, inline: true },
                { name: 'Guild ID', value: `${body.guild.id}`, inline: true },
                { name: 'Channel ID', value: `${body.channel.id}`, inline: true },
            );
            embed.setTitle(body.guild.name);
            if (body.guild.description) embed.setDescription(body.guild.description);
            if (body.guild.splash) embed.setImage(`https://cdn.discordapp.com/splashes/${body.guild.id}/${body.guild.splash}.jpg?size=512`);
            if (body.guild.icon) embed.setThumbnail(`https://cdn.discordapp.com/icons/${body.guild.id}/${body.guild.icon}.webp`);
            return message.channel.send(embed);
        }
    },
};
