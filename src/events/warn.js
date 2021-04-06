module.exports = (client, info) => {
    if (process.env.advancedDebugging == 'true') console.log(`⚠ ${info}`);
};
