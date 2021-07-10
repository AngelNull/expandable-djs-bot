const { MessageAttachment } = require('discord.js');
require('dotenv').config();

module.exports = {
    name: 'list',
    description: 'Returns a list of information about the guild. [Developer]',
    options: [
        {
            name: 'output',
            type: 'STRING',
            description: 'The list to output',
            required: true,
            choices: [
                {
                    name: 'Members',
                    value: 'members',
                },
                {
                    name: 'Roles',
                    value: 'roles',
                },
            ],
        },
    ],
    botPermsNeeded: [],
    userPermsNeeded: ['ADMINISTRATOR'],
    ephemeral: false,
    devOnly: true,
    private: false,
    cooldown: 15,
    execute: async (interaction, handlers, lang, trans) => {
        const choice = interaction.options.get('output').value;

        /* This will output all roles in the server */
        if (choice == 'roles') {
            /* As we are outputting a list of roles in the server, the permission MANAGE_ROLES will be needed. */
            if (!interaction.guild.me.permissions.has('MANAGE_ROLES')) interaction.followUp(trans('NEED_PERMS', lang, 'MANAGE_ROLES'));

            /* Build the output for the file */
            let toWrite = `Roles for ${interaction.guild} @ ${new Date()}\n`;
            await interaction.guild.roles.cache.forEach((role) => {
                toWrite = `${toWrite}-------\nName: ${role.name}, ID: ${role.id}, Created: ${role.createdAt}\n`;
            });

            handleFileCreate(toWrite, interaction, 'txt', handlers);
        } else if (choice == 'members') {
            /* This will output all users in the server */
            let toWrite = `Members in ${interaction.guild} @ ${new Date()}\n`;
            await interaction.guild.members.cache.forEach((member) => {
                toWrite = `${toWrite}-------\nUsername: ${member.user.username}${member.user.discriminator}, ID: ${member.id}, Created: ${member.user.createdAt}\n`;
            });

            handleFileCreate(toWrite, interaction, 'txt', handlers);
        } else {
            return interaction.followUp(trans('LIST_INVALID_CHOICE', lang, '`members`, `roles`'));
        }
    },
};

async function handleFileCreate(toWrite, interaction, fileType, handlers) {
    /* Define the outputted file name */
    const fileName = `${interaction.guild.name}_members_${Math.floor(Math.random() * new Date())}`;

    /* Create the file and send it back to the chat, then delete the file */
    handlers.file.create(fileName, toWrite, fileType);
    const attachment = new MessageAttachment(`./out/${fileName}.${fileType}`);
    await interaction.followUp({ files: [attachment] });
    if (process.env.keepOutFiles == 'false') handlers.file.remove(fileName, fileType);
}
