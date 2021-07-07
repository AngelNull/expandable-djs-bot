/**
 * Formats a string and adds commas in the correct places
 * @param {string} nStr The content to add commas to
 */
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

/**
 * Formats the given date into en-gb format
 * @param {Date} date The date to format
 */
const date = (date) => {
    return new Intl.DateTimeFormat('en-GB').format(date);
};

module.exports = { addCommas, date };
