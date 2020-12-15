require('dotenv').config();
const fs = require('fs') 

const { Client, Message } = require('discord.js');
const { fstat } = require('fs');
const { error } = require('console');
const client = new Client();
const PREFIX = "$";

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`)
});
client.on('message', (message) =>{
    fs.writeFile('output.txt', message.content, error)
    return;
});

client.on('message', (message) =>{
    console.log(`${message.author.tag} sent a dumbass message`)
    if (message.content === 'hello')
    message.reply('fuck you asshole')
});
client.on('message', (message) =>{
    console.log(`${message.author.tag} sent a dumbass message`)
    if (message.content === 'Matt is cool')
    message.reply('fuckin a bud')
});
client.on('message', (message) =>{
    console.log(`${message.author.tag} sent a dumbass message`)
    if (message.content === 'Tyler is a chad')
    message.reply('Huge chad')
});
client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args ] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

        if (CMD_NAME === 'big'){
        message.channel.send('Sad');
        }
    }
});


client.login(process.env.DISCORDJS_BOT_TOKEN)