require('dotenv').config();

var fs = require('fs');
const { Client, Message } = require('discord.js');
const { error } = require('console');
const client = new Client();
const PREFIX = "$";
var list = [
    "you wanka", 
    "ur not my dad", 
    "come at me bro", 
    "barry's hand dude"
]
var holja = {
    attitude: "toxic",
    skills: "minimal",
    beerdrinking: "limited"
}
var jon = {
    attitude: "super chill",
    skills: "decent",
    beerdrinking: "expert"
}

client.on('ready', function () {
    console.log(`${client.user.tag} has logged in`);
});

client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content.includes('fuck'))
    message.reply('watch your mouth, there are kids in here. Ear muffs Stove, ear muffs.')
});

client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content.includes('jon')) {
        text = JSON.stringify(jon)
        message.channel.send(text)
    }
});

client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content.includes('steve'))
        message.channel.send('THE Professional Jon Simp');
});

client.on('message', (message) =>{
    if (message.content === 'hello')
    message.reply('hi cutie :)');
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

client.on('message', (message) =>{ 
    console.log(`${message.author.tag} sent a message`)
    if (message.content === 'bye')
    message.reply('get bent, loser.')
});


client.on('message', (message) =>{
    console.log(`${message.author.tag} sent a message`)
    if (message.content.includes('matt'))
    message.reply('friggin a right bud, go jackets!')
});


client.on('message', (message) =>{ 
    if (message.author.bot) return;
    console.log(`${message.author.tag} sent a message`)
    if (message.content.includes('Tyler'))
    message.reply('Tyler? Did you mean Chad?')
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

client.on('message', (message) =>{
    if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args ] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

        if (CMD_NAME === 'holja'){    
        message.channel.send(holja.size);
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
        message.channel.send("https://tenor.com/view/ha-gay-yeah-right-ha-yeah-ha-hayyyy-gif-11812798");
        }
    }
});

client.login(process.env.TOKEN)