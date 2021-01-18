const fs = require('fs');

/**
 * Output a file with the specified name and content in the out directory
 * @param  {string} fileName The file name
 * @param {any} content The content in the file
 */

function create(fileName, content) {
    /* Check if the out directory exists, if it doesn't, create it */
    if (!fs.existsSync('./out'))
        fs.mkdir('./out', function (err) {
            if (err) throw err;
        });

    /* Write the specified file to the output folder */
    fs.writeFileSync(`./out/${fileName}.txt`, `${content}`, function (err) {
        if (err) throw err;
    });
}

/**
 * Delete a file with the specified name in the out directory
 * @param  {string} fileName The file name
 */

function remove(fileName) {
    fs.unlink(`./out/${fileName}.txt`, function (err) {
        if (err) throw err;
    });
}

module.exports = {
    create,
    remove,
};
