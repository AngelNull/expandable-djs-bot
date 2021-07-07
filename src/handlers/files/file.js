const fs = require('fs');
const handlers = require('../../handlers');
/**
 * Output a file with the specified name and content in the out directory
 * @param {string} fileName The file name
 * @param {any} content The content in the file
 * @param {String} ext The file extension
 * @returns {Void} Creates a file
 * @example create('songs', 'Example - Song Name', 'txt')
 */

function create(fileName, content, ext) {
    if (!ext) handlers.error.generic('FILE_EXT_MISSING', handlers.i18n.lang());
    if (!fs.existsSync('./out'))
        /* Check if the out directory exists, if it doesn't, create it */
        fs.mkdir('./out', function (err) {
            if (err) throw err;
        });

    /* Write the specified file to the output folder */
    fs.writeFileSync(`./out/${fileName}.${ext || 'txt'}`, `${content}`, function (err) {
        if (err) throw err;
    });
}

/**
 * Delete a file with the specified name in the out directory
 * @param  {String} fileName The file name
 * @param {String} ext The file extension
 * @example remove('songs', 'txt')
 */

function remove(fileName, ext) {
    if (!ext) handlers.error.generic('FILE_EXT_MISSING');
    fs.unlink(`./out/${fileName}.${ext}`, function (err) {
        if (err) throw err;
    });
}

module.exports = {
    create,
    remove,
};
