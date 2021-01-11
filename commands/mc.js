exports.run = (client, message, args) => {
  let botNum = message.guild.members.filter(member => member.user.bot).size
  let tot = message.guild.members.filter(member => member.user.bot).size + message.guild.memberCount - message.guild.members.size;
  message.reply(`${message.guild.memberCount -  message.guild.members.filter(member => member.user.bot).size} human(s), and ${message.guild.members.filter(member => member.user.bot).size} bot(s).`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["membercount"],
  permLevel: "User"
};

exports.help = {
  name: "mc",
  category: "Info",
  description: "Tells you how many members and bots are in your server.",
  usage: ",mc"
};