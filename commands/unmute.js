exports.run = (client, message, args, member) => {
  let tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  const settings = message.settings;
  let muterole = message.guild.roles.find(role => role.name ===  settings.mutedRole)
  
  if(!tounmute) return message.reply('Who would you like me to unmute?');
  
  if(tounmute.roles.find(role => role.name === message.settings.mutedRole)) {
    tounmute.removeRole(muterole);
    message.reply(`${tounmute} is now unmuted`);
  } else {
    message.reply("They are not muted");
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "unmute",
  category: "Moderation",
  description: "Unmutes a user",
  usage: ",unmute <user>"
};