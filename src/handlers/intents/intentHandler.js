const intentsList = require('../../../node_modules/discord.js/src/util/Intents');
require('dotenv').config();

/**
 *   Resolve intents list from the discord.js
 *  @returns {String[]} Intents
 */
function resolveIntents() {
    let intents = Object.keys(intentsList.FLAGS);
    return intents;
}

/**
 * Turn intents into an object
 * @returns {any[]} A list of intents with the key pair "name: intent" and "value: intent"
 */
function intentToObjects() {
    let intents = resolveIntents();

    let intentChoices = [];
    intents.forEach((intent) => {
        intentChoices.push({ name: intent, value: intent });
    });

    intentChoices = Object.values(Object.assign({}, intentChoices));
    return intentChoices;
}

/**
 * Structures intent from .env to an array
 * @returns An array of intents
 */
function structureIntents() {
    const intentsChosen = process.env.intents;
    let intentArray = intentsChosen.split(',');
    return intentArray;
}

module.exports = {
    resolveIntents,
    intentToObjects,
    structureIntents,
};
