const translateEN = {
    /*
    READ THE DOCUMENTATION BEFORE CREATING A TRANSLATION
    /*

    /* 
        Generic
    */

    CLICK_HERE: `Click Here`,
    SUCCESS: 'Success',
    LOADING: 'Loading',
    PLEASE_WAIT: 'Please wait...',
    LOAD_EVENT: (event) => `⌛ Loading Event: ${event}`,
    LOAD_COMMAND: (command) => `⌛ Loading Command: ${command}`,
    LOAD_HANDLER: (handler) => `⌛ Loading Handler: ${handler}`,

    /*
		Errors
	*/

    ERROR: 'Error',
    COMMAND_NOT_FOUND: `I could not find a command or alias with that name.`,
    USER_NOT_FOUND: `That user could not be found.`,
    NO_PERMISSION: (user) => `You do not have permission to use that, ${user}.`,
    ON_COOLDOWN: (user, cooldown, command) => `${user}, Please wait **${cooldown}** more second(s) before using \`${command}\` again.`,
    ERROR_OUTPUT: `An unexpected error occured.`,
    ERROR_OUTPUT_TRACE: (err) => `An unexpected error occured: ${err}.`,
    NEED_PERMS: (permissionName) => `I lack the permission ${permissionName}, please grant me this before trying again.`,
    EMBED_LACKS_FIELD: 'Malformed embed, it lacks the valid fields.',
    FILE_EXT_MISSING: 'Missing file extension arg.',

    /*          
        Events Files
        Every single event-only translation goes here. 
    *

    /* events/ready.js */
    CLIENT_READY: (user, date) => `✅ Ready: ${user} @ ${date}`,

    /* events/message.js */
    INCORRECT_USAGE: (prefix, command, usage) => `Incorrect usage! The correct usage is:\n\`${prefix}${command} ${usage}\``,

    /* 
        Handlers 
    */

    BUTTON_ACTION_CONFIRMED: `Action Confirmed`,
    BUTTON_ACTION_CANCELLED: `Action Cancelled`,
    BUTTON_ACTION_TIMEDOUT: `Action Timed Out`,
    BUTTON_ACTION_TIMEDOUT_DESC: `You failed to react in time so the action was automatically cancelled.`,
    BUTTON_CONFIRM: `Confirm`,
    BUTTON_CANCEL: `Cancel`,

    /* 
        Commands
        Every single command-only translation goes here
    */

    /* commands/avatar.js */
    USERS_AVATAR: (user) => `${user}'s Avatar`,

    /* commands/deploy.js */
    REDEPLOY_START: `Deploying...`,
    REDEPLOY_PRIVATE: `Deploying privately...`,
    REDEPLOY_PRIVATE_DONE: `Successfully redeployed all commands privately.`,
    REDEPLOY_PUBLIC_DONE: `Successfully redeployed all commands publicly.`,
    REDEPLOY_PUBPRIV_DONE: `Commands successfully deployed publicly and privately`,
    REDEPLOY_PUBLIC_CMD: (cmd) => `Publicly redeploying command: \`${cmd}\``,
    REDEPLOY_PRIVATE_CMD: (cmd) => `Privately redeploying command: \`${cmd}\``,

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
    HELP_DMS_CLOSED: `I couldn't DM you since you have your DMs closed!`,
    HELP_SENT: 'I sent you help via DM!',
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
    PING_RESPONSE: (websocket) => `Pong!\nWebsocket Ping: **${websocket}**ms`,

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
    SINFO_GUILD_CREATEDAT: 'Created At',

    /* commands/statistics.js */
    STATS_TITLE: 'Statistics',
    STATS_DESCRIPTION: (user) => `Here are the statistics for ${user}`,
    STATS_GUILDS: 'Total Guilds',
    STATS_USERS: 'Total Users',
    STATS_CHANNELS: 'Total Channels',
    STATS_UPTIME: 'Uptime',
    STATS_WEBSOCKET: 'Websocket',

    /* commands/userinfo.js */
    UINFO_USER_DISPLAYNAME: 'Display Name',
    UINFO_USER_ID: 'ID',
    UINFO_USER_HIGHESTROLE: 'Highest Role',
    UINFO_USER_JOINEDAT: 'Joined',
    UINFO_USER_CREATEDAT: 'Created At',
};

module.exports = {
    translateEN,
};
