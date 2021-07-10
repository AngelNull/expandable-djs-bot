const { translate: trans, lang } = require('../handlers/language/translator');
const { date } = require('../handlers/format/format');
const chalk = require('chalk');

require('dotenv').config();
module.exports = async (client) => {
    /* Authenticated */
    console.log(`${chalk.green(`${trans('CLIENT_READY', lang(), client.user.tag, date())}`)}`);
    /* Set the custom presence and activity for the bot */
    setPresence(client);
    /* Deploy commands in the test server on launch */
    await client.guilds.cache.get(process.env.guildID)?.commands.set(client.commands);
    return console.log(trans('REDEPLOY_PRIVATE_DONE', lang()));
};

function setPresence(client) {
    if (process.env.enableCustomActivity && process.env.streamingURL != 'None')
        client.user.setPresence({ activities: [{ name: process.env.botActivity, type: process.env.botActivityType, url: process.env.streamingURL }], status: process.env.botStatus });
    else if (process.env.enableCustomActivity && process.env.streamingURL == 'None')
        client.user.setPresence({ activities: [{ name: process.env.botActivity, type: process.env.botActivityType }], status: process.env.botStatus });
    else client.user.setPresence({ status: process.env.botStatus });
}
