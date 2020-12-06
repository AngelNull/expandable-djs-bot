const { advancedDebugging } = require('../core/configs/config.json');

module.exports = (client) => {
    if (advancedDebugging) console.log(`‼ ${client.error}`);
};
