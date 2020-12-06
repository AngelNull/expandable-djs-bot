const { advancedDebugging } = require('../core/configs/config.json');
module.exports = (client, info) => {
    if (advancedDebugging) console.log(`⚠ ${info}`);
};
