const { translate: trans, lang: figureLang } = require('../language/translator');
const chalk = require('chalk');
let lang = figureLang();

/**
 *
 * @param {String} errorTransKey The translation key to use as the error message
 * @returns {Console} A console.error event with the translation
 * @example return generic('ERROR')
 */
function generic(errorTransKey) {
    return console.error(`${chalk.redBright(`⚠ ${trans('ERROR', lang)}`)} ${chalk.yellowBright(trans(errorTransKey, lang))}`);
}

module.exports = {
    generic,
};
