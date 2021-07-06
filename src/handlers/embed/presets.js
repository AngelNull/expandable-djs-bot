require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const handlers = require('../../handlers');

/**
 * Adds an invoker to the footer of the embed
 * @param {GuildMember} invoker The GuildMember or User object that invoked the message
 * @param {MessageEmbed} embed The embed to add the invoker to
 * @returns {MessageEmbed} A MessageEmbed Object
 */
function appendInvoker(invoker, embed) {
    embed.setFooter(`Invoked By: ${invoker.tag}`, invoker.displayAvatarURL({ dynamic: true }));
}

/**
 * Create an error embed
 * @param {String} title The title of the embed (optional)
 * @param {String} desc The description of the embed (optional)
 * @param {*} optionalThumbnail The thumbnail for the embed (optional)
 * @returns {MessageEmbed} A MessageEmbed Object
 */
function error(title, desc, optionalInvoker, optionalThumbnail) {
    let embed = new MessageEmbed();
    const lang = handlers.i18n.lang();

    embed.setTitle(title || handlers.i18n.translate('ERROR'), lang);
    embed.setDescription(desc || handlers.i18n.translate('ERROR_OUTPUT'), lang);
    embed.setColor(process.env.errorColour);
    embed.setTimestamp(new Date());
    if (optionalThumbnail) embed.setThumbnail(optionalThumbnail);
    if (optionalInvoker) embed.setFooter(`Invoker: ${optionalInvoker.user.tag}`, optionalInvoker.displayAvatarURL({ dynamic: true }));
    return embed;
}

/**
 * Create a success embed
 * @param {String} title The title of the embed
 * @param {String} desc The description of the embed
 * @param {*} optionalThumbnail The thumbnail for the embed (optional)
 * @returns {MessageEmbed} A MessageEmbed Object
 */
function success(title, desc, optionalThumbnail) {
    let embed = new MessageEmbed();
    const lang = handlers.i18n.lang();

    embed.setTitle(title || handlers.i18n.translate('SUCCESS', lang));
    embed.setDescription(desc || handlers.i18n.translate('SUCCESS'), lang);
    embed.setColor(process.env.successColour);
    embed.setTimestamp(new Date());
    embed.setFooter();
    if (optionalThumbnail) embed.setThumbnail(optionalThumbnail);

    return embed;
}

/**
 * Create a loading embed
 * @param {String} title The title of the embed
 * @param {String} desc The description of the embed
 * @param {*} optionalThumbnail The thumbnail for the embed (optional)
 * @returns {MessageEmbed} A MessageEmbed Object
 */
function loading(title, desc, optionalThumbnail) {
    let embed = new MessageEmbed();
    const lang = handlers.i18n.lang();

    embed.setTitle(title || handlers.i18n.translate('LOADING'), lang);
    embed.setDescription(desc || handlers.i18n.translate('LOADING'), lang);
    embed.setColor(process.env.loadingColour);
    embed.setTimestamp(new Date());
    if (optionalThumbnail) embed.setThumbnail(optionalThumbnail);

    return embed;
}

/**
 * Create a basic embed
 * @param {String} title The title of the embed
 * @param {String} desc The description of the embed
 * @param {*} optionalThumbnail The thumbnail for the embed (optional)
 * @returns {MessageEmbed} A MessageEmbed Object
 */
function basic(title, desc, optionalThumbnail) {
    let embed = new MessageEmbed();

    if (!title || !desc) handlers.error.generic('EMBED_MISSING_FIELD');
    embed.setTitle(title);
    embed.setDescription(desc);
    embed.setColor(process.env.embedColour);
    embed.setTimestamp(new Date());
    if (optionalThumbnail) embed.setThumbnail(optionalThumbnail);

    return embed;
}

/**
 * Creates an image embed with no description
 * @param {String} title The title of the embed
 * @param {*} image The image for the embed
 * @returns {MessageEmbed} A MessageEmbed Object
 */
function imageNoText(title, image) {
    let embed = new MessageEmbed();

    if (!title || !image) handlers.error.generic('EMBED_MISSING_FIELD');
    embed.setTitle(title);
    embed.setImage(image);
    embed.setColor(process.env.embedColour);
    embed.setTimestamp(new Date());

    return embed;
}

/**
 * Create s an image embed with a description
 * @param {String} title The title of the embed
 * @param {String} desc The description of the embed
 * @param {*} image The image for the embed
 * @returns {Message} A MessageEmbed Object
 */
function imageWithText(title, desc, image) {
    let embed = new MessageEmbed();

    if (!title || !desc || !image) handlers.error.generic('EMBED_MISSING_FIELD');
    embed.setTitle(title);
    embed.setDescription(desc);
    embed.setImage(image);
    embed.setColor(process.env.embedcolour);

    return embed;
}

module.exports = {
    error,
    success,
    loading,
    basic,
    imageNoText,
    imageWithText,
    appendInvoker,
};
