const { translate: trans, lang: figureLang } = require('../language/translator');
const chalk = require('chalk');

/**
 *
 * @param {String} errorTransKey The translation key to use as the error message
 * @returns {Console} A console.error event with the translation
 * @example return generic('ERROR')
 */
function generic(errorTransKey, ...args) {
    return console.error(`${chalk.redBright(`⚠ ${trans('ERROR', figureLang())}!`)} ${chalk.yellowBright(trans(errorTransKey, figureLang(), ...args))}`);
}

module.exports = {
    generic,
};
