const Discord = require('discord.js');
const ree = require('../config.js');

exports.run = (client, message, args) => {
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  const modlog = message.settings.modLogChannel.substr(2).substr(0, 18);

  
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Error")
      .setColor("fc4040")
      .setDescription("You do not have the permission: `BAN_MEMBERS`");
    message.channel.send(embed);
    message.react("❌");
    return;
  }
  
  if (args.length === 0) {
    const embed = new Discord.RichEmbed()
      .setTitle("Invalid Usage")
      .setColor("fc4040")
      .setDescription(`${message.settings.prefix}ban <mention or id> [reason]`);
    message.channel.send(embed);
    return;
  }
  
  if (!member) {
    const embed = new Discord.RichEmbed()
      .setTitle("Error")
      .setColor("fc4040")
      .setDescription("Could not find this user!");
    message.channel.send(embed);
    return;
  }
  
  if (member.highestRole.position > message.member.highestRole.position) {
    const embed = new Discord.RichEmbed()
      .setTitle("Error")
      .setColor("fc4040")
      .setDescription("You can not ban this user! His/her role is higher than yours!");
    message.channel.send(embed);
    message.react("❌");
    return;
  }
  
  if(!member.guild.me.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setTitle("Error")
      .setColor("fc4040")
      .setDescription("I don\'t have sufficient permissions to ban people!");
    message.channel.send(embed);
    message.react("❌");
    return;
  }
  
  if (message.author.id === member.id) {
    const embed = new Discord.RichEmbed()
      .setTitle("Error")
      .setColor("fc4040")
      .setDescription("You can't make me ban you.");
    message.channel.send(embed);
    message.react("❌");
    return;
  }
  
  if (client.user.tag === member.user.tag) {
    const embed = new Discord.RichEmbed()
      .setTitle("Error")
      .setColor("fc4040")
      .setDescription("I can't ban myself. If you want me to leave, use " + message.settings.prefix + "leave");
    message.channel.send(embed);
    message.react("❌");
    return;
  }
  
  let reason, tag;
  reason = args.slice(1);
  reason = reason.join(" ");
  
  if (!reason) {
    reason = "N/A";
  }
  
  tag = member.user.tag;
    
  member.ban(reason);
  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setColor("41fc44")
    .setDescription(`banned ${tag} from the guild!`)
    .addField("Reason", reason);
  message.reply('Banned them');

  let thingy = message.guild.channels.get(modlog)
  
  if(!thingy) return message.reply("Please set a mod logging channel!");
  
  thingy.send(embed)
  member.send("You were banned from " + message.guild.name + " by " + message.author.tag + " for " + reason).catch(function(error) {
    return;
  });
  console.log(`Banned ${member.user.tag} from ${message.guild.name} for ${reason}.`);
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "ban",
  category: "Moderation",
  description: "Bans a user from this server",
  usage: ",ban <user> <reason>"
};