const config = require('../config.js');

exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
  const answers = [
    "Kill em'!",
    `${message.author} just killed ${member}! BANBANBAN`,
    '***o0f***',
    'Killed',
    'They just got fucked on by suclerious !',
    'No u',
  ];
  if (message.author.id === config.ownerID) return message.reply("Yes daddy");
  if (message.author.bot) return message.reply('Nice try, distant cousin');
  if (!member) return message.reply('Call the suicide hotline. 1-800-273-8255');
  message.channel.send(answers[~~(answers.length * Math.random())]);
  console.log(`Just killed ${member.user.tag}!`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "kill",
  category: "Fun",
  description: "Kill someone.",
  usage: ",kill "
};