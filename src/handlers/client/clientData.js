const { client } = require('../../client/core');
const { format } = require('../index');

/**
 * Fetches the current bot member count and formats it.
 */
const botTotalMemberCount = async () => {
    let guildMemberCount = 0;
    await client.guilds.cache.forEach(async (guild) => {
        guildMemberCount = guildMemberCount + guild.memberCount;
    });
    guildMemberCount = format.addCommas(guildMemberCount);
    return guildMemberCount;
};

/**
 * Returns the bots current uptime
 */
const botUptime = () => {
    let totalSeconds = client.uptime / 1000;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let uptime = `${hours} hours ${minutes} minutes`;
    return uptime;
};

module.exports = { botTotalMemberCount, botUptime };
