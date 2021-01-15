# Getting Started \(Auto\)

## Setting Up The Bot

An [Alternative Guide \(steps 1-3\)](https://discordjs.guide/preparations/setting-up-a-bot-application.html) to this setup tutorial, maybe be a lot more in-depth than the one provided here and a little easier to follow as these are just the short steps.

### **Pre-Step.**

Once you have cloned the repository, navigate to the install directory and run `npm i` to install dependancies.

### **Step 1.**

Head on over to [https://discord.com/developers/applications](https://discord.com/developers/applications) and log in, create a new developer application.

You should now see this: ![Application Page](https://discordjs.guide/assets/img/create-app.cb14ef85.png)

### **Step 2.**

Select "Bot" on the settings sidebar.

![Bot Page](https://discordjs.guide/assets/img/create-bot.dff0f01e.png)

### **Step 3.**

Click "Add Bot" and confirm the pop-up that appears on your screen.

![Bot Built Page](https://discordjs.guide/assets/img/created-bot.c422fe87.png)

### **Step 4.**

Go to `src/core/configs` and rename `config.json.example` to `config.json` and in the root directory rename `.env.example` to `.env` Then, open up your terminal and navigate to the install directory and run `npm run config`

Navigate through the setup prompts, once finished you will recieve confirmation.

### **Step 5.**

Once you have done this, you should be ready to launch the bot and get it online! To do this, simply type `node .`. The console should read back every event that is in the events directory being loaded, and then all of the commands in the commands directory being loaded. If everything has gone successfully. You will see the following:

`✅ Authenticated: BotName#0000 @ Time`

This means your bot is now online and connected to the Discord API.

## Common Issues & Fixes

#### "The bot isn't responding to the prefix I gave it"

The most common cause of this is empty spacing before or after the prefix in the config.json file; if this is not the cause and you have tried multiple prefixes, please open an issue [here](https://github.com/AngelNull/expandable-djs-bot/issues/new/choose)

#### "The bot won't respond to developer commands"

In order for the bot to respond to your developer commands; you must give it your discord ID, this is not the same as your discord username. For more information about discord IDs, [check here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID)

#### "The bots custom presence isn't changing from online"

If the bots Status \(the indicator on its profile\) isn't updating, this is because of two things:

1. It hasn't been given enough time to update, please allow 2 minutes after restarting the bot for it to take effect

#### "The bots activity/status isn't changing"

You have either entered a status that is too long for discord, given it an invalid activity type or not enabled custom activity in the config.

