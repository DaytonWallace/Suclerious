exports.run = (client, message, args) => {
  const settings = message.settings = client.getGuildSettings(message.guild);

  if (message.author.id === "291628762125172747") return message.reply('You are banned from this command.')
  if (args.includes("nigger", "nigga")) return;
      message.channel.send(args.join(' ')).catch(error => client.log('Say', `${error}`));
    message.delete().catch(error => console.log('Say', `${error}`));
    console.log('[Say]', `${message.author.tag} made me say \"${args.join(' ')}".`); 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['s'],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Misc",
  description: "Make Jim say what you want. Don't abuse pls",
  usage: ",say <what you want Jim to say>"
};