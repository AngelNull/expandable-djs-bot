# Creating Commands

## Enabling/Disabling Commands

Disabling or Enabling commands is a simple process, all that you need to do is move the command in or out of the 'disabled\_cmds' folder and restart the bot.

## Making Your Own Commands

Want to make your own command for the bot? The process is fairly simple for registering a new command.

We will run through creating a simple command for the bot. For this example, we're going to assume that we're making a new command called **hello** that will simply send a message to the channel it was used in saying "Hey!".

#### This bot uses translation files

When creating a new command please edit `en.js` in the `translations` directory to include all your new phrases, if they overlap please use an existing one. You are not required to do this for every language, I am looking for better ways of streamlining the translations creation process, if you have any ideas please [let me know](https://github.com/AngelNull/expandable-djs-bot/issues/new/choose).

## Step 1

Create a new file in the **commands** directory, we're going to call ours **hello.js**

## Step 2

Inside of your new file, paste the exports needed to for registering a command below and adjust them to your liking.

### **Each Export Explained:**

```javascript
module.exports = {
    /* The commands name, this should be the same as the file name */
    name: '',
    /* The description of the command, this will be shown when the help command is used */
    description: '',
    /* Other ways of executing this command, do not include the name of the command. */
    aliases: [''],
    /* Does this command need additional arguements to run? */
    args: false,
    /* How to properly use this command, only including the arguments needed */
    usage: '',
    /* What permission flag should the user need to run this command? */
    /* https://discord.com/developers/docs/topics/permissions */
    permission: '',
    /* Should this command be developer/owner of the bot only? */
    devOnly: false,
    /* The cooldown between uses of this command in seconds */
    cooldown: 10,
}
```

For our command we are creating; we are going to use the following exports.

```javascript
module.exports = {
    name: 'hello',
    description: 'Makes the bot say hey!',
    aliases: ['heyo', 'hey'],
    args: false,
    usage: '',
    permission: '',
    devOnly: false,
    cooldown: 1,
```

## Step 3

We will now need to add the following to make sure our code knows what we're actually executing with this command.

```javascript
 execute: (message, lang, tr, args) => { 
     /* Code Goes Here */
 }
```

Message - The commands triggering message Lang - The configuration language Tr - Translator function Args - Command arguments

After we have put all of this together, our **hello.js** file should now look something like this:

```javascript
module.exports = {
    name: 'hello',
    description: 'Makes the bot say hey!',
    aliases: ['heyo', 'hey'],
    args: false,
    usage: '',
    permission: '',
    devOnly: false,
    cooldown: 1,
     execute: (message, lang, tr args) => { 
     /* Code Goes Here */
    },
}
```

## Step 4

Restart the bot and check the console, if the command has been successfully registered, the following should appear in the console:

```text
⏳ Loading Command: hello.js
```

## Step 5

Now that we have a command that the bot recognises, all we have to do is add some functional code that should be executed when we run it, for this example, we want it to say "Hey!" in the chat we did the command in.

To do this, we simple need to put the following line:

```javascript
message.channel.send('Hey!');
```

## Step 6

Once this has been added, run the reload command with your bots own prefix, for this example, the prefix is `!` so we will run `!reload hello`. Now, when we do `!hello` the bot should reply like this:

![](../../.gitbook/assets/image%20%282%29.png)

And that's it! You've created a fully operational command. From here-on out, it's up to you to decide what you want to create using discord.js.

If you want to use predefined embed colour values, you can just import tham with `require`, and all other configuration as well as that can be found in `src/core/configs`

## Further Reading

[Discord.js Documentation](https://discord.js.org/#/docs/main/stable/general/welcome)

[DiscordJS Beginners Guide](https://discordjs.guide/)

