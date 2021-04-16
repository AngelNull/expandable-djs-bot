require('dotenv').config();

module.exports = (client) => {
    if (process.env.advancedDebugging == 'true') console.log(`❌ ${client.error}`);
};
