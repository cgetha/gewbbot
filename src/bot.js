require('dotenv').config();

var fs = require('fs');
const { Client, Message } = require('discord.js');
const { error } = require('console');
const client = new Client();
const PREFIX = "$";
var list = [
    "you fuckin wanka", 
    "ur not my dad", 
    "come at me bro", 
    "fucking barry's hand dude"
]
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`)
});
client.on('message', (message) =>{
    if (message.author.bot) return;
    fs.appendFile('output.txt',`/n ${message.content} : ${message.author.tag} : ${message.createdAt} \n`, error)
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
        message.channel.send('<@142454868806729728> THE Professional Jon Simp');
});
client.on('message', (message) =>{
    console.log(`${message.author.tag} sent a dumbass message`)
    if (message.content === 'hello')
    message.reply('fuck you asshole');
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
    if (message.content.includes('matt'))
    message.reply('fuckin a right bud')
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
client.on('message', (message) =>{ /* Array Destructure & PREFIX implementation */
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args ] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

        if (CMD_NAME === 'dif'){
        message.channel.send('https://www.youtube.com/watch?v=e2QKlmMT8II');
        }
    }
});
client.on('message', (message) =>{ /* Array Destructure & PREFIX implementation */
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args ] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

        if (CMD_NAME === 'love'){
        message.channel.send("https://tenor.com/view/ha-gay-ken-jeong-youre-gay-thats-gay-gif-16371455");
        }
    }
});


client.login(process.env.TOKEN)