require('dotenv').config();

var fs = require('fs');
const { Client, Message } = require('discord.js');
const { error } = require('console');
const client = new Client();
const PREFIX = "$";
var list = [
    "sorry gotta go simp", 
    "teddy stop biting me", 
    "21 Savage is so good", 
    "Thats some WAP"
]
var holja = {  
    name: "holja",
    top_game: "battlerite",
    beerdrinking: "average",
    will_die_for_you: "for gewb"
}
var jon = {
    attitude: "super chill",
    skills: "decent",
    beerdrinking: "expert",
    would_die_for_you: "in a video game, then bitch about it."
}
var gewb =  {
    name: "kc",
    skills: "undefined",
    beerdrinking: "retired due to health",
    would_die_for_you: "who's asking?"
}
var matt =  {
    name: "mote",
    skills: "expert mountain biker",
    beerdrinking: "unknown",
    would_die_for_you: "are you WoW?"
}
var steve =  {
    name: "stove",
    skills: "expert weed smoker",
    beerdrinking: "see above",
    would_die_for_you: "for house stewb"
}

client.on('ready', function () {
    console.log(`${client.user.tag} has logged in`);
});

client.on('message', (message) =>{
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
       const [CMD_NAME, ...args ] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

        if (CMD_NAME === 'jon') {

            text = JSON.stringify(jon, null, 1)
            facts = ("```" + text + "```")
            message.channel.send(facts)

        } else if (CMD_NAME === 'blaize') {

            text = JSON.stringify(holja, null, 1)
            facts = ("```" + text + "```")
            message.channel.send(facts)

        } else if (CMD_NAME == 'gewb') {

            text = JSON.stringify(gewb, null, 1)
            facts = ("```" + text + "```")
            message.channel.send(facts) 

        } else if (CMD_NAME == 'matt') {

            text = JSON.stringify(matt, null, 1)
            facts = ("```" + text + "```")
            message.channel.send(facts) 

        } else if (CMD_NAME == 'steve') {

            text = JSON.stringify(steve, null, 1)
            facts = ("```" + text + "```")
            message.channel.send(facts) 
        } else if (CMD_NAME === 'love'){
            message.channel.send("https://tenor.com/view/ha-gay-yeah-right-ha-yeah-ha-hayyyy-gif-11812798");
        }
    }

// EASTER EGG RESPONSES

    if (message.content.includes('taco')) {
        message.channel.send('and some Margaritas :)');
    }

    if (message.content.includes('tom brady')) {
        message.channel.reply('stop simping already');
    }

    if (message.content.includes('pizza')) {
        message.channel.reply('one bite');
    }

});

client.login(process.env.TOKEN)