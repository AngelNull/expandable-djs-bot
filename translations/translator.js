const { translateEN } = require('./en');
const { translateFR } = require('./fr');

const translations = {
    en: translateEN,
    fr: translateFR,
    default: translateEN,
};

const translate = (messageId, language, ...params) => {
    if (translations[language || 'default']) {
        const translator = translations[language || 'default'];
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
            console.log(`Translation message ${messageId} not available in ${language}`);
            return null;
        }
    } else {
        console.log(`No translation file available for: ${language}`);
        return null;
    }
};

module.exports = {
    translate,
};
