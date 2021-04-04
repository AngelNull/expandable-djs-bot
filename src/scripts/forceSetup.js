const fs = require('fs');

require('dotenv').config();

console.log(`\nWarning: Force configure should not be used unless necessary as it does not fill in the owner ID.\nPlease only use this for testing purposes.`);

// Write the configuration for the bot
fs.writeFile(
    './src/core/configs/config.json',
    `{
        "prefix":"!",
        "ownerID":"0",
        "language":"en",
    
        "botStatus":"online",
        "enableCustomActivity":"false",
        "botActivity":"",
        "botActivityType":"}",
        "streamingURL":"None",
    
        "keepOutFiles":false,
        "advancedDebugging":false
}`,
    (err) => {
        if (err) throw err;
    },
);
