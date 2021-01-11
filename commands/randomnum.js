exports.run = (client, message, args) => {
  if (!args) return message.reply('Give me a number to make the limit');
  message.reply(Math.floor(Math.random() * Math.floor(args[0])))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gen'],
  permLevel: "User"
};

exports.help = {
  name: "randomnum",
  category: "Fun",
  description: "Gives you a random number, with the maximum being a number you supply",
  usage: ",randomnum <number>"
};