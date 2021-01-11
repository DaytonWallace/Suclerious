exports.run = (client, message) => {
  message.reply("Need help? Join my support server! https://discord.gg/eCPetcz");
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "support",
  category: "Info",
  description: "Gives you an invite to my support server",
  usage: ",support"
};