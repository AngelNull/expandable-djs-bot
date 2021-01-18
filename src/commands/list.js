const { MessageAttachment } = require('discord.js');
const { keepOutFiles } = require('../core/configs/config.json');
const utils = require('../utils/');

module.exports = {
    name: 'list',
    description: 'Output a list of information about the guild',
    aliases: ['output'],
    args: true,
    usage: '[type]',
    permission: 'ADMINISTRATOR',
    devOnly: true,
    cooldown: 15,
    execute: async (message, lang, tr, args) => {
        let type = args[0].toLowerCase();

        /* This will output all roles in the server */
        if (type == 'roles') {
            /* As we are outputting a list of roles in the server, the permission MANAGE_ROLES will be needed. */
            if (message.guild.me.permissions.has('MANAGE_ROLES')) message.channel.send(tr.translate('NEED_PERM', lang, 'MANAGE_ROLES'));

            /* Build the output for the file */
            let toWrite = `Roles for ${message.guild} @ ${new Date()}\n`;
            await message.guild.roles.cache.forEach((role) => {
                toWrite = `${toWrite}-------\nName: ${role.name}, ID: ${role.id}, Created: ${role.createdAt}\n`;
            });

            /* Define the outputted file name */
            const fileName = `${message.guild.name}_roles_${Math.floor(Math.random() * new Date())}`;
            /* Create the file and send it back to the chat, then delete the file */
            await utils.file.create(fileName, toWrite);
            const attachment = new MessageAttachment(`./out/${fileName}.txt`);
            await message.channel.send(attachment);
            if (!keepOutFiles) utils.file.remove(fileName);
        } else if (type == 'members') {
            /* This will output all users in the server */
            let toWrite = `Members in ${message.guild} @ ${new Date()}\n`;
            await message.guild.members.cache.forEach((member) => {
                toWrite = `${toWrite}-------\nUsername: ${member.tag}, ID: ${member.id}, Created: ${member.createdAt}\n`;
            });

            /* Define the outputted file name */
            const fileName = `${message.guild.name}_members_${Math.floor(Math.random() * new Date())}`;

            /* Create the file and send it back to the chat, then delete the file */
            await utils.file.create(fileName, toWrite);
            const attachment = new MessageAttachment(`./out/${fileName}.txt`);
            await message.channel.send(attachment);
            if (!keepOutFiles) utils.file.remove(fileName);
        } else {
            return message.channel.send(tr.translate('LIST_INVALID_CHOICE', lang, '`members`, `roles`'));
        }
    },
};
