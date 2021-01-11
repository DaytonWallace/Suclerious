exports.run = (client, message) => {
  let member = message.mentions.members.first();
  let parts = message.content.split(" ");
  if (!parts) return message.reply("Provide arguments.");
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Insufficient permissions.");
  
  let keeek = parts[2]
  let role2 = message.guild.roles.find(role => role.name === keeek)
  member.removeRole(role2)
  message.reply(`Successfully removed ${role2} from <@${member.user.id}>`)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rrole"],
  permLevel: "Moderator"
};

exports.help = {
  name: "removerole",
  category: "Moderation",
  description: "Removes a role from a user",
  usage: ",removerole <user> <role>"
};