const { successColour, errorColour } = require('../core/configs/embedcolours.json');

/*
 * This function sets up a "confirm/deny" reaction event on the given message, userid is for what user can confirm or deny this event and embed is for
 * the specified embed to edit
 */
const confirmReaction = async (message, userID, embed) => {
    let isError = false;

    await message.react('✅').catch(() => {
        isError = true;
        return 'error';
    });

    setTimeout(async () => {
        await message.react('❎').catch(() => {
            isError = true;
            return 'error';
        });
    }, 750);

    if (isError) return;

    const filter = (reaction, user) => {
        return ['✅', '❎'].includes(reaction.emoji.name) && user.id === userID;
    };
    try {
        const collected = await message.awaitReactions(filter, {
            max: 1,
            time: 20000,
            errors: ['time'],
        });

        if (collected.first().emoji.name === '✅') {
            embed.setTitle('Action Confirmed');
            embed.setColor(successColour);
            await message.reactions.removeAll().catch(() => {});
            return 'confirmed';
        } else {
            embed.setTitle('Action Cancelled');
            embed.setColor(errorColour);
            await message.reactions.removeAll().catch(() => {});
            return 'denied';
        }
    } catch (error) {
        embed.setTitle('Action Timed Out');
        embed.setColor(errorColour);
        embed.setDescription('You failed to react in time so the action was automatically cancelled.');
        embed.setFooter('Reactions fail to appear? Check your server permissions.');
        await message.reactions.removeAll().catch(() => {});
        await message.edit(embed).catch(() => {});
        return 'error';
    }
};

module.exports = { confirmReaction };
