const translateEN = {
    /*
    READ THE DOCUMENTATION BEFORE CREATING A TRANSLATION
    
	When translating this file, please only change the parts in backticks and nothing else. all variables need to be used.
    These can be placed anywhere within the string, refer back to the source language (English) for their original placement.

    Please maintain the usage of the markdown usage where possible, including newlines. If a word cannot be translated at all, use a suitable alternative.
    */

    /* 
        Generic
    */

    CLICK_HERE: `Click Here`,
    LOAD_EVENT: (event) => `⌛ Loading Event: ${event}`,
    LOAD_COMMAND: (command) => `⌛ Loading Command: ${command}`,

    /*
		Errors
	*/

    COMMAND_NOT_FOUND: `I could not find a command or alias with that name.`,
    USER_NOT_FOUND: `That user could not be found.`,
    NO_PERMISSION: (user) => `You do not have permission to use that, ${user}.`,
    ON_COOLDOWN: (user, cooldown, command) => `${user}, Please wait ${cooldown} more second(s) before using \`${command}\` again.`,
    ERROR_OUTPUT: `An unexpected error occured.`,
    ERROR_OUTPUT_TRACE: (err) => `An unexpected error occured: ${err}.`,
    NEED_PERMS: (permissionName) => `I lack the permission ${permissionName}, please grant me this before trying again.`,
    /*          
        Events Files
        Every single event-only translation goes here. 
    *

    /* events/ready.js */
    CLIENT_READY: (user, date) => `✅ Ready: ${user} @ ${date}`,

    /* events/message.js */
    INCORRECT_USAGE: (prefix, command, usage) => `Incorrect usage! The correct usage is: \n \`${prefix}${command} ${usage}\``,

    /* 
        Commands
        Every single command-only translation goes here
    */

    /* commands/avatar.js */
    // This is set as the embed title for when a users avatar is posted
    USERS_AVATAR: (user) => `${user}'s Avatar`,

    /* commands/dmsay.js */
    DM_PENDING_TITLE: `Confirm Direct Message`,
    DM_PENDING_DESC: (user, message) => `Are you sure you want to send the following message to ${user}?\n\`\`\`${message}\`\`\``,
    DM_CONFIRMED_TITLE: `Direct Message: Sent`,
    DM_CONFIRMED_DESC: (user, message) => `Your message has been sent to ${user}\n\`\`\`${message}\`\`\``,
    DM_FAILED_TITLE: `Direct Message: Failed`,
    DM_FAILED_DESC: (user) => `${user} has their Direct Messages closed and could not be DM'd`,
    DM_CANCELLED: `Direct Message sending cancelled.`,

    /* commands/help.js */
    HELP_TITLE: `Help Has Arrived`,
    HELP_DESCRIPTION: (username) => `Use the information below to learn more about ${username}.`,
    HELP_NO_LINKS_TITLE: `Oh No!`,
    HELP_NO_LINKS_DESCRIPTION: `The bot owner hasn't provided any further information, sorry!`,
    HELP_COMMANDS: `Commands List`,
    HELP_SUPPORT: `Support`,
    HELP_REPOSITORY: `Repository`,

    /* commands/invite.js */
    INVITE_CHECKING: `Checking Invite`,
    INVITE_INVALID_TITLE: `Invalid Invite`,
    INVITE_INVALID_DESC: `Could not find information for that invite, it is likely invalid or has expired.`,
    INVITE_INFORMATION: `Invite Information`,
    INVITE_CTR_IN_GUILD: (guild) => `\`Invite creator is also a member of ${guild}\``,

    /* commands/list.js */
    LIST_INVALID_CHOICE: (options) => `Invalid list generator option, the valid options are: ${options}.`,

    /* commands/ping.js */
    PING_PINGING: `Pinging...`,
    PING_RESPONSE: (latency) => `Pong!\nLatency is **${latency}**ms.`,

    /* commands/reload.js */
    RELOAD_SUCCESS: (command) => `Command \`${command}\` was reloaded!`,
    RELOAD_ERROR: (command, err) => `There was an error while reloading a command \`${command}\`:\n\`\`\`\`${err}\`\`\`\``,

    /* commands/serverinfo.js */
    SINFO_GUILD_NAME: 'Guild Name',
    SINFO_GUILD_ID: 'Guild ID',
    SINFO_GUILD_OWNER: 'Owner',
    SINFO_GUILD_MEMBERS: 'Members',
    SINFO_GUILD_CHANNELS: 'Channels',
    SINFO_GUILD_ROLES: 'Roles',
    SINFO_GUILD_CREATEDAT: (date) => `Created at: ${date}`,

    /* commands/userinfo.js */
    UINFO_DISPLAYNAME: 'Display Name',
    UINFO_ID: 'ID',
    UINFO_HIGHESTROLE: 'Highest Role',
    UINFO_JOINEDAT: 'Joined',
    UINFO_CREATEDAT: 'Created At',
};

module.exports = {
    translateEN,
};
