const { translateEN } = require('../../i18n/languages/en');
const { translateFR } = require('../../i18n/languages/fr');
const chalk = require('chalk');
require('dotenv').config();

const translations = {
    en: translateEN,
    fr: translateFR,
    default: translateEN,
};

/**
 * Translate the following key into the specified language with the params specified if needed
 * @param {String} messageId The key of the message to translate
 * @param {String} language The language to translate the key into
 * @param {String} ...params The rest of the params needed for the key, if any.
 * @example interaction.editReply(translate('ERROR', 'en'))
 */
const translate = (messageId, language, ...params) => {
    if (translations[language || 'default']) {
        const translator = translations[language || 'default'];

        // If the translation key doesn't exist in the language selected, throw a warning.
        if (!translations[language][messageId] && translations['default'][messageId]) {
            console.warn(`${chalk.yellowBright(`⚠ Warning: Translation key ${messageId} not available in ${language}, using default.`)}`);
        }

        // Run the translator if the key exists in either the language selected or the default.
        const translation = translator[messageId] || translations['default'][messageId];
        if (translation) {
            const translationType = typeof translation;
            if (translationType === 'string') {
                return translation;
            } else if (translationType === 'function') {
                return translation(...params);
            } else {
                throw new Error('Unrecognized translation type');
            }
        } else {
            // Throw an error if the key doesn't exist at all.
            console.error(`${chalk.redBright(`⚠ Error: Translation key ${messageId} does not exist in ${language} or default language.`)}`);
            return null;
        }
    } else {
        throw new Error(`No translation file available for: ${language}`);
    }
};

/**
 * This exists to allow for a source of truth for language, and to allow for per-server lang expansion easily.
 * @returns The right language to use for the situation
 */
function lang() {
    return process.env.language;
}

module.exports = {
    translate,
    lang,
};