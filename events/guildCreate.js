module.exports = (client, guild) => {
  client.logger.cmd(`[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id}). This server has ${guild.members.size} people. Jim now has ${client.users.size}`);
};