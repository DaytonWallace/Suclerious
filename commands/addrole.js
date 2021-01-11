exports.run = (client, message) => {
  let member = message.mentions.members.first();
  let parts = message.content.split(" ");
  let keeek = parts[2]
  let role2 = message.guild.roles.find(role => role.name === keeek)
  if (!parts) return message.reply("Provide arguments.");
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Insufficient permissions.");
  if (member.roles.has(role2)) return message.reply('This user already has the role.');
  
  member.addRole(role2)
  message.reply(`Added ${role2} to <@${member.user.id}> successfully.`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "addrole",
  category: "Moderation",
  description: "Adds a role to a user",
  usage: ",addrole <user> <role>"
};