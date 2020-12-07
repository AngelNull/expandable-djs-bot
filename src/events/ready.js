const { enableCustomActivity, botActivity, botActivityType, botStatus } = require('../core/configs/config.json');
module.exports = (client) => {
    /* Omitted once the bot has successfully authenticated */
    console.log(`✅ Authenticated: ${client.user.tag} @ ${new Date()}`);
    /* Set the custom presence and activity for the bot */
    if (enableCustomActivity) client.user.setPresence({ activity: { name: botActivity, type: botActivityType }, status: botStatus });
    else client.user.setPresence({ status: botStatus });
};
