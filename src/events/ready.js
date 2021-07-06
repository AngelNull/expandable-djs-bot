const { translate: trans, lang } = require('../handlers/language/translator');

require('dotenv').config();
module.exports = (client) => {
    /* Omitted once the bot has successfully authenticated */
    console.log(trans('CLIENT_READY', lang(), client.user.tag, new Date()));
    /* Set the custom presence and activity for the bot */
    if (process.env.enableCustomActivity && process.env.streamingURL != 'None')
        client.user.setPresence({ activities: [{ name: process.env.botActivity, type: process.env.botActivityType, url: process.env.streamingURL }], status: process.env.botStatus });
    else if (process.env.enableCustomActivity && process.env.streamingURL == 'None')
        client.user.setPresence({ activities: [{ name: process.env.botActivity, type: process.env.botActivityType }], status: process.env.botStatus });
    else client.user.setPresence({ status: process.env.botStatus });
};
