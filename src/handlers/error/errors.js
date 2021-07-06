const { translate: trans, lang: figureLang } = require('../language/translator');
const chalk = require('chalk');
let lang = figureLang();

function generic(errorTransKey) {
    return console.error(`${chalk.redBright(`⚠ ${trans('ERROR', lang)}`)} ${chalk.yellowBright(trans(errorTransKey, lang))}`);
}

module.exports = {
    generic,
};
