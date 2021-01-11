const discord = require("discord.js")

exports.run = (client, message, args) => {
  let member = message.mentions.members.first() || message.author;
    
  let avembed = new discord.RichEmbed()
    .setTitle("Avatar")
    .setImage(member.user.displayAvatarURL)
    .setAuthor(message.author.tag)
  
  message.channel.send(avembed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "avatar",
  category: "Info",
  description: "Shows your avatar if there is no mention.",
  usage: ",avatar <member> *OPTIONAL*"
};