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
bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "kick":
      if (!args[1]) message.channel.send("You need to Specify a person");
      const user = message.mentions.users.first();

      if (user) {
        const member = member.guild.member(usre);

        if (memebr) {
          member
            .kick("You where kick for tralling")
            .then(() => {
              message.reply("successfully kicked ${user.tag}");
            })
            .catch(err => {
              message.replay("i was unable to kick the member");
              console.log(err);
            });
        } else {
          message.reply("That user isn't in the this guild");
        }
      } else {
        message.reply("That user isn't in the this guild");
      }

      break;
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
