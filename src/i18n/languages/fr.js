const translateFR = {
    /*
    READ THE DOCUMENTATION BEFORE CREATING A TRANSLATION
    
	When translating this file, please only change the parts in backticks and nothing else. all variables need to be used.
    These can be placed anywhere within the string, refer back to the source language (English) for their original placement.

    Please maintain the usage of the markdown usage where possible, including newlines. If a word cannot be translated at all, use a suitable alternative.
    */

    /* 
        Generic
    */
    SUCCESS: 'Succès',
    LOADING: 'Chargement',
    CLICK_HERE: `Cliquez ici`,
    LOAD_EVENT: (event) => `⌛ Chargement: ${event}`,
    LOAD_COMMAND: (command) => `⌛ Chargement: ${command}`,
    LOAD_HANDLER: (handler) => `⌛ Chargement: ${handler}`,

    /*
		Errors
	*/

    Error: 'Erreur',
    COMMAND_NOT_FOUND: `Je n'ai pas trouvé de commande ou d'alias portant ce nom.`,
    USER_NOT_FOUND: `Cet utilisateur n'a pas pu être trouvé.`,
    NO_PERMISSION: (user) => `Vous n'avez pas la permission d'utiliser cela, ${user}.`,
    ON_COOLDOWN: (user, cooldown, command) => `${user}, veuillez patienter **${cooldown}** seconde(s) de plus avant d'utiliser à nouveau \`${command}\`.`,
    ERROR_OUTPUT: `Une erreur inattendue s'est produite.`,
    ERROR_OUTPUT_TRACE: (err) => `Une erreur inattendue s'est produite.: ${err}.`,
    NEED_PERMS: (permissionName) => `Je n'ai pas l'autorisation ${permissionName}, veuillez m'accorder ceci avant de réessayer.`,
    EMBED_MISSING_FIELD: `Embed malformé, il manque les champs valides`,
    FILE_EXT_MISSING: 'Extension de fichier manquante arg.',

    /*          
        Events Files
        Every single event-only translation goes here. 
    *

    /* events/ready.js */
    CLIENT_READY: (user, date) => `✅ Prêt: ${user} @ ${date}`,

    /* events/messageCreate.js */
    INCORRECT_USAGE: (prefix, command, usage) => `Une utilisation incorrecte! L'utilisation correcte est: \n \`${prefix}${command} ${usage}\``,

    /* 
        Handlers 
    */

    REACT_ACTION_CONFIRMED: 'Action Confirmée',
    REACT_ACTION_CANCELLED: 'Action Annulée',
    REACT_ACTION_TIMEDOUT: 'Action Expirée',
    REACT_ACTION_TIMEDOUT_DESC: "Vous n'avez pas réagi à réagir à temps afin que l'action soit automatiquement annulée.",
    REACT_ACTION_TIMEDOUT_FOOTER: 'Les réactions ne paraissent pas? Vérifiez vos autorisations de serveur.',

    /* 
        Commands
        Every single command-only translation goes here
    */

    /* commands/avatar.js */
    // This is set as the embed title for when a users avatar is posted
    USERS_AVATAR: (user) => `${user}'s Avatar`,

    /* commands/deploy.js */
    REDEPLOY_START: 'Déploiement...',
    REDEPLOY_PRIVATE: 'Déploiement en privé...',
    REDEPLOY_PRIVATE_DONE: 'Déploiement réussi de toutes les commandes en privé.',
    REDEPLOY_PUBLIC_DONE: 'Déploiement public de toutes les commandes avec succès.',
    REDEPLOY_PUBPRIV_DONE: 'Commandes déployées avec succès en public et en privé',
    REDEPLOY_PUBLIC_CMD: (cmd) => `Commande de redéploiement public: \`${cmd}\``,
    REDEPLOY_PRIVATE_CMD: (cmd) => `Commande de redéploiement privé: \`${cmd}\``,

    /* commands/dmsay.js */
    DM_PENDING_TITLE: `Confirmer le message direct`,
    DM_PENDING_DESC: (user, message) => `Voulez-vous vraiment envoyer le message suivant à ${user}?\n\`\`\`${message}\`\`\``,
    DM_CONFIRMED_TITLE: `Message direct: envoyé`,
    DM_CONFIRMED_DESC: (user, message) => `Votre message a été envoyé à ${user}\n\`\`\`${message}\`\`\``,
    DM_FAILED_TITLE: `Message direct: échec`,
    DM_FAILED_DESC: (user) => `${user} a ses messages privés fermés et n'a pas pu recevoir de DM`,
    DM_CANCELLED: `Envoi de message privé annulé.`,

    /* commands/help.js */
    HELP_TITLE: `L'aide est arrivée!`,
    HELP_DESCRIPTION: (username) => `Utilisez les informations ci-dessous pour en savoir plus sur ${username}`,
    HELP_NO_LINKS_TITLE: `Oh non!`,
    HELP_NO_LINKS_DESCRIPTION: `Le propriétaire du bot n'a pas fourni d'informations supplémentaires, désolé!`,
    HELP_COMMANDS: `Liste des commandes`,
    HELP_SUPPORT: `Support`,
    HELP_REPOSITORY: `Référentiel`,

    /* commands/invite.js */
    INVITE_CHECKING: `Vérification de l'invitation`,
    INVITE_INVALID_TITLE: `Invitation non valide`,
    INVITE_INVALID_DESC: `Impossible de trouver les informations pour cette invitation, elle est probablement invalide ou a expiré.`,
    INVITE_INFORMATION: `Invite Information`,
    INVITE_CTR_IN_GUILD: (guild) => `\`Invite creator est également membre de ${guild}\``,

    /* commands/list.js */
    LIST_INVALID_CHOICE: (options) => `Option de générateur de liste non valide, les options valides sont: ${options}.`,

    /* commands/ping.js */
    PING_RESPONSE: (websocket) => `Pong!\nPing Websocket: **${websocket}**ms`,

    /* commands/reload.js */
    RELOAD_SUCCESS: (command) => `La commande \`${command}\` a été rechargée!`,
    RELOAD_ERROR: (command, err) => `Une erreur s'est produite lors du rechargement d'une commande \`${command}\`:\n\`\`\`\`${err}\`\`\`\``,

    /* commands/serverinfo.js */
    SINFO_GUILD_NAME: 'Nom de guilde',
    SINFO_GUILD_ID: 'ID de guilde',
    SINFO_GUILD_OWNER: 'Propriétaire',
    SINFO_GUILD_MEMBERS: 'Membres',
    SINFO_GUILD_CHANNELS: 'Canaux',
    SINFO_GUILD_ROLES: 'Les rôles',
    SINFO_GUILD_CREATEDAT: 'Créé à',

    /* commands/userinfo.js */
    UINFO_USER_DISPLAYNAME: 'Afficher un nom',
    UINFO_USER_ID: 'ID',
    UINFO_USER_HIGHESTROLE: 'Rôle le plus élevé',
    UINFO_USER_JOINEDAT: 'Rejoint',
    UINFO_USER_CREATEDAT: 'Créé à',
};

module.exports = {
    translateFR,
};
