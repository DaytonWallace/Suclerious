const Discord = require('discord.js')

exports.run = (client, message) => {
  let embed = new Discord.RichEmbed()
    .setTitle("Vote")
    .setColor(message.member.displayColor)
    .addField("Thanks for even using Decerious! Please help him by voting here:", "https://discordbots.org/bot/477867803773239297/vote", true)
    .setFooter("Developed by Yosh#7203");
    
  message.channel.send(embed)
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "vote",
  category: "Misc",
  description: "Help Decerious become a trending bot by voting!",
  usage: ",vote"
};