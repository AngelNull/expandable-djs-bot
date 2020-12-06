const translateFR = {
    /*
    READ WIKI/TRANSLATIONS.md AND THIS BEFORE MAKING ANY CHANGES:
    
	When translating this file, please only change the parts in backticks and nothing else. all variables need to be used.
    These can be placed anywhere within the string, refer back to the source language (English) for their original placement.

    Please maintain the usage of the markdown usage where possible, including newlines. If a word cannot be translated at all, use a suitable alternative.
    */

    /* 
        Generic
    */

    CLICK_HERE: `Cliquez ici`,

    /*
		Errors
	*/

    COMMAND_NOT_FOUND: `Je n'ai pas trouvé de commande ou d'alias portant ce nom.`,
    USER_NOT_FOUND: `Cet utilisateur n'a pas pu être trouvé.`,
    NO_PERMISSION: (user) => `Vous n'avez pas la permission d'utiliser cela, ${user}.`,
    ON_COOLDOWN: (user, cooldown, command) => `${user}, veuillez patienter ${cooldown} seconde (s) de plus avant d'utiliser à nouveau \`${command}\`.`,
    ERROR_OUTPUT: `Une erreur inattendue s'est produite.`,
    ERROR_OUTPUT_TRACE: (err) => `Une erreur inattendue s'est produite.: ${err}.`,

    /*          
        Events Files
        Every single event-only translation goes here. 
    *
    
    /* events/message.js */
    INCORRECT_USAGE: (prefix, command, usage) => `Une utilisation incorrecte! L'utilisation correcte est: \n \`${prefix}${command} ${usage}\``,
    NEED_EMBED_PERMS: `J'ai besoin de l'autorisation \`EMBED_LINKS\` pour être utilisée.`,

    /* 
        Commands
        Every single command-only translation goes here
    */

    /* commands/avatar.js */
    // This is set as the embed title for when a users avatar is posted
    USERS_AVATAR: (user) => `${user}'s Avatar`,

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
    HELP_DESCRIPTION: (username) =>
        `Vous voulez obtenir une liste de toutes les commandes de ${username}?\nVoulez-vous signaler un bogue ou demander une fonctionnalité?\nVoulez-vous voir le dépôt Github de ${username}?\nUtilisez les liens ci-dessous.`,
    HELP_COMMANDS: `Liste des commandes`,
    HELP_BUGS_FEATURES: `Bugs/Fonctionnalités`,
    HELP_GITHUB_REPO: `Repo GitHub`,

    /* commands/invite.js */
    INVITE_CHECKING: `Vérification de l'invitation`,
    INVITE_INVALID_TITLE: `Invitation non valide`,
    INVITE_INVALID_DESC: `Impossible de trouver les informations pour cette invitation, elle est probablement invalide ou a expiré.`,
    INVITE_INFORMATION: `Invite Information`,
    INVITE_CTR_IN_GUILD: (guild) => `\`Invite creator est également membre de ${guild}\``,

    /* commands/ping.js */
    PING_PINGING: `S'il vous plaît, attendez...`,
    PING_RESPONSE: (latency) => `Terminé!\nLa latence est de **${latency}** ms.`,

    /* commands/reload.js */
    RELOAD_SUCCESS: (command) => `La commande \`${command}\` a été rechargée!`,
    RELOAD_ERROR: (command, err) => `Une erreur s'est produite lors du rechargement d'une commande \`${command}\`:\n\`\`\`\`${err}\`\`\`\``,
};

module.exports = {
    translateFR,
};
