exports.run = (client, message) => {
  message.reply("`Invite me!` https://discord.com/api/oauth2/authorize?client_id=783898327220486164&permissions=2147483639&scope=bot");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["inv"],
  permLevel: "User"
};

exports.help = {
  name: "invite",
  category: "Misc",
  description: "Gives you a link to invite me to a server",
  usage: ",invite"
};