const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('mn onlinem');
  	}
});


client.on('msg', msg => {
    if (msg.content === 'key') {
    	msg.reply('Slaw mn MrBot, Sarmand(MR PANDA) druste krdum :)');
  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
