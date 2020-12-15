require('dotenv').config();

var fs = require('fs');
const { Client, Message } = require('discord.js');
const { error } = require('console');
const client = new Client();
const PREFIX = "$";
var list = ["what the hell", "who the hell", "come at me bro", "where is holja"]

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`)
});
client.on('message', (message) =>{
    if (message.author.bot) return;
    fs.appendFile('output.txt',"\n" + message.content + " : " + message.author.tag + "\n", error)
});
client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content.includes('fuck'))
    message.reply('watch your fucking mouth asshole.')
});
client.on('message', (message) =>{ /* weed is tight */
    if (message.author.bot) return;
    if (message.content.includes('weed'))
    message.reply('weed is tight bro, weed is tight.')
});
client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content.includes('steve'))
    message.reply('THE Professional Jon Simp')
});
client.on('message', (message) =>{
    console.log(`${message.author.tag} sent a dumbass message`)
    if (message.content === 'hello')
    message.reply('fuck you asshole')
});
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
var selection = getRandomInt(list.length);
client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content === 'holja'){
        message.reply(list[selection])
    }
});
/* 
dont forget to comment ur worthless stuff
*/
client.on('message', (message) =>{ /* bye response */
    console.log(`${message.author.tag} sent a dumbass message`)
    if (message.content === 'bye')
    message.reply('get fucked, loser.')
});
client.on('message', (message) =>{
    console.log(`${message.author.tag} sent a dumbass message`)
    if (message.content === 'Matt is cool')
    message.reply('fuckin a bud')
});
client.on('message', (message) =>{ /* Chad response */
    if (message.author.bot) return;
    console.log(`${message.author.tag} sent a dumbass message`)
    if (message.content.includes('Tyler'))
    message.reply('Tyler? Did you mean Chad?')
});
client.on('message', (message) =>{ /* Array Destructure & PREFIX implementation */
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

client.login(process.env.TOKEN)