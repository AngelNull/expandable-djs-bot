const fs = require('fs');
const { client, translate: trans, lang } = require('./client/core.js');
const chalk = require('chalk');
var recursive = require('recursive-readdir');

fs.readdir('./src/events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith('.js')) return;
        const event = require(`./events/${file}`);
        console.log(`${chalk.yellow(`${trans('LOAD_EVENT', lang(), file)}`)}`);
        let eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

fs.readdir('./src/commands/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split('.')[0];
        console.log(`${chalk.yellow(`${trans('LOAD_COMMAND', lang(), file)}`)}`);
        client.commands.set(commandName, props);
    });
});

recursive('./src/handlers/', (err, files) => {
    if (err) return console.error(err);
    files.forEach((file) => {
        if (!file.endsWith('.js') || file == 'src\\handlers\\index.js') return;
        console.log(`${chalk.yellow(`${trans('LOAD_HANDLER', lang(), file)}`)}`);
    });
});
