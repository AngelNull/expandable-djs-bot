const { MessageAttachment } = require('discord.js');
require('dotenv').config();

module.exports = {
    name: 'list',
    description: 'Output a list of information about the guild',
    aliases: ['output'],
    args: true,
    usage: '[type]',
    permission: 'ADMINISTRATOR',
    devOnly: true,
    cooldown: 15,
    execute: async (message, handlers, lang, trans, args) => {
        let type = args[0].toLowerCase();

        /* This will output all roles in the server */
        if (type == 'roles') {
            /* As we are outputting a list of roles in the server, the permission MANAGE_ROLES will be needed. */
            if (!message.guild.me.permissions.has('MANAGE_ROLES')) message.channel.send(trans('NEED_PERMS', lang, 'MANAGE_ROLES'));

            /* Build the output for the file */
            let toWrite = `Roles for ${message.guild} @ ${new Date()}\n`;
            await message.guild.roles.cache.forEach((role) => {
                toWrite = `${toWrite}-------\nName: ${role.name}, ID: ${role.id}, Created: ${role.createdAt}\n`;
            });

            handleFileCreate(toWrite, message, 'txt', handlers);
        } else if (type == 'members') {
            /* This will output all users in the server */
            let toWrite = `Members in ${message.guild} @ ${new Date()}\n`;
            await message.guild.members.cache.forEach((member) => {
                toWrite = `${toWrite}-------\nUsername: ${member.user.username}${member.user.discriminator}, ID: ${member.id}, Created: ${member.user.createdAt}\n`;
            });

            handleFileCreate(toWrite, message, 'txt', handlers);
        } else {
            return message.channel.send(trans('LIST_INVALID_CHOICE', lang, '`members`, `roles`'));
        }
    },
};

async function handleFileCreate(toWrite, message, fileType, handlers) {
    /* Define the outputted file name */
    const fileName = `${message.guild.name}_members_${Math.floor(Math.random() * new Date())}`;

    /* Create the file and send it back to the chat, then delete the file */
    handlers.file.create(fileName, toWrite, fileType);
    const attachment = new MessageAttachment(`./out/${fileName}.${fileType}`);
    await message.channel.send({ files: [attachment] });
    if (process.env.keepOutFiles == 'false') handlers.file.remove(fileName, fileType);
}
