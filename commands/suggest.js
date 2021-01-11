exports.run = (client, message, args) => {
  const argless = args[0];
  let member = message.author

  if (!argless) {
    message.channel.send('So... Where\'s the suggestion at tho?');
  } else {
    message.reply("Hmm.... Seems good to me. I will tell Yosh.");
    client.channels.get('478432956663201812').send(`${message.author.tag} suggests: ` + args.join(' '));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "suggest",
  category: "Misc",
  description: "Suggest something that I should have.",
  usage: "suggest <suggestion>"
};