const Discord = require('discord.js');
const config = require('../config.js'); 

exports.run = (client, message, level, member) => {
  if (level < 3) {
    const embed = new Discord.RichEmbed()
      .setTitle("Error")
      .setColor(config.red)
      .setDescription('Only administrators can make me leave.');
    message.channel.send(embed);
    return;
  }
  
  message.channel.send("Bye bye. ;-;");
  message.guild.leave();
  console.log("I left because of " + message.author.tag); 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Administrator"
};

exports.help = {
  name: "leave",
  category: "Misc",
  description: "Makes me leave this server.",
  usage: ",leave"
};