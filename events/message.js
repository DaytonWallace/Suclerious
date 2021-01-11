module.exports = (client, message) => {
  if (message.author.bot) return;
  if (client.talkedRecently.has(message.author.id)) return;
  client.talkedRecently.add(message.author.id)
  setTimeout(() => client.talkedRecently.delete(message.author.id), 3000);
  
  
  const settings = message.settings = client.getGuildSettings(message.guild);

  if (!message.content.startsWith(settings.prefix)) return;
  
  const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const level = client.permlevel(message);


  const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
  if (!cmd) return;

  if (cmd && !message.guild && cmd.conf.guildOnly)
    return message.channel.send("This command is unavailable via private message. Please run this command in a server.");

  if(!message.channel.permissionsFor(client.user.id).has('SEND_MESSAGES')) return


  if (level < client.levelCache[cmd.conf.permLevel]) {
    if (settings.systemNotice === "true") {
      return message.channel.send(`You do not have permission to use this command.
  Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
  This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    } else {
      return;
    }
  }

  message.author.permLevel = level;

  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1));
  }
  client.logger.cmd(`[CMD] ${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`);
  cmd.run(client, message, args, level);
};
