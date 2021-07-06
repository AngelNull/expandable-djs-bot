const { translate: trans, lang: figureLang } = require('../language/translator');
const chalk = require('chalk');
let lang = figureLang();

/**
 *
 * @param {*} errorTransKey The translation key to use as the error message
 * @returns A console.error event with the translation key
 */
function generic(errorTransKey) {
    return console.error(`${chalk.redBright(`⚠ ${trans('ERROR', lang)}`)} ${chalk.yellowBright(trans(errorTransKey, lang))}`);
}

module.exports = {
    generic,
};
