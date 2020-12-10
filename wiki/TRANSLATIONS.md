# Translations
expandable-djs-bot supports translations! Here you will learn how to change the language you are using the bot in, as well as contributing a new language.

# Changing Bot Language

If you would like to change the language the bot uses, go to `/core/configs/config.json` and modify the "language" element.

**When changing language, please use the two letter code instead of the full name**

Currently supported languages: 

```
✔ - Written by Native
⁉ - Written by AI Translator 

- English (en) ✔
- French (fr) ⁉
```

# Adding A Language
Don't see your language on the list above? Now's a good time to make it!

If you have native fluency in the language you would like to translate to, I will happily add your translation to the project!

Please note that language files translated by an online translator will likely not be merged.

## Getting Started
In order to make a new language, fork this project and make sure you've got:

  1. An up-to-date version of `translations/templates/translation-template.txt`
  2. A fresh and up-to-date version of the project
  3. AN IDE that allows for linting with eslint and prettier, as well as highlighting (Recommended: VSCode)

Once you have these things, we're ready to begin adding the new language to the bot! 

## **Step 1.**
 In order to register a new language pack, you'll need to create a new file with the 2 letter language code (eg. `en.js` for English) inside of the `translations/languages` directory.

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

## **Congratulations**

You should now successfully have your language pack recognised by the bot, now it's time to start modifying the language file itself.

**IMPORTANT:** When adding a new language file, you only need to change things that are inside of the backticks, comments, translation codes and variables **DO NOT** need to be translated.

The translation-template will have provided all values pre-filled in English with all variables used, it is important when translating to keep the formatting as similar as possible, making sure **all** variables are used when needed.

## **After You've Translated**

Once you have managed to translate everything accurately, open up a pull-request and it'll be reviewed. All of your translations will be reviewed and the translation pack will be ensured it has been setup properly.

If everything has gone smoothly, your translation pack will be merged into the project.

