# Creating Translations

This bot supports translations! Here you will learn how to create a new translation file.

## Adding A Language

If you have fluency in the language you would like to translate to, and would like to contribute it to the project, it will be happily merged.

**Please note that language files translated by an online translator will likely not be merged.**

## Getting Started

In order to make a new language, fork this project and make sure you've got:

1. An up-to-date version of `translations/templates/translation-template.txt`
2. A fresh and up-to-date version of the project
3. An IDE that allows for linting with eslint and prettier, as well as highlighting \(Recommended: VSCode\)

Once you have these things, we're ready to begin adding the new language to the bot!

## **Step 1.**

In order to register a new language pack, you'll need to create a new file with the 2 letter language code \(eg. `en.js` for English\) inside of the `translations/languages` directory.

## **Step 2.**

Once you have done this, copy and paste the `translations-template.txt` into your new language. From here, you'll need to change the following parts of the file to the two letter country code

```javascript
const translateLANGHERE = {
```

```javascript
module.exports = {
    translateLANGHERE,
};
```

## **Step 3.**

After modifying the aforementioned parts of the file, you will now need to open up `translations/translator.js` and add the following, adjusting `translateLANGHERE` and `./langcode`.

```javascript
const { translateLANGHERE } = require('./langcode');
```

Once you have done this, you will need to add the language pack to the translations list here, again adjusting `langcode` and `translateLANGHERE`:

```javascript
const translations = {
    en: translateEN,
    fr: translateFR,
    langcode: translateLANGHERE,
    default: translateEN,
};
```

## **Step 4.**

Adding the language to the automated setup handler. To do this, go to `scripts/setup.js` and navigate to this part of the file

```javascript
    {
        type: 'select',
        name: 'language',
        message: 'Bot Language?',
        choices: [
            { title: 'English (Source)', value: 'en' },
            { title: 'French (Translation)', value: 'fr' },
            // { title: 'LANG (Translation)', value: 'LANG' },
        ],
        initial: 0,
    },
```

Add your new language in to the choices list, and set the value to be the same as the language code.

Run through the setup handler by doing `npm run config` and ensure that the new option works successfully.

## **Congratulations**

You should now successfully have your language pack recognised by the bot, now it's time to start modifying the language file itself.

**IMPORTANT:** When adding a new language file, you only need to change things that are inside of the backticks, comments, translation codes and variables **DO NOT** need to be translated.

The translation-template will have provided all values pre-filled in English with all variables used, it is important when translating to keep the formatting as similar as possible, making sure **all** variables are used when needed.

## **After You've Translated**

Once you have managed to translate everything accurately, open up a pull-request and it'll be reviewed. All of your translations will be reviewed and the translation pack will be ensured it has been setup properly.

If everything has gone smoothly, your translation pack will be merged into the project.

**Thank you! :\)**

