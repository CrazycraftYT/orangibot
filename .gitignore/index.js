const Discord = require("discord.js");
const fs = require("fs");

var prefix = "!";

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("Oranginal est quand même très fort non ?");
    console.log("Le bot a bien été connecte");
});

bot.on('message', msg => {
  if(MessageChannel.content[0] === PREFIX) {
    if(msg.content === PREFIX + 'Mention') {
      let role = msg.guild.roles.find('name', 'Mention')

      if(msg.member.roles.find('name', 'Mention')) {
        msg.member.removeRole(Mention)
        msg.reply(':white_check_mark: Ce rôle vous a été enlevé.')
      }
      else {
        msg.member.addRole(Mention)
        msg.reply(':white_check_mark: Ce rôle vous a été assigné.')
      }
    }
  }
})

bot.login(process.env.TOKEN);
