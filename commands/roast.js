exports.run = (client, message, args) => {
  const config = require('../config.js');
  let member = message.mentions.users.first();
  
  if (!member) return message.reply('Who to roast?')
  if (member.id === config.ownerID) return message.reply('Hell no bitch, he\'s our daddy');
  
  let roasts = [
    'shut your crusty musty rusty untrusty dusty looking ass up.',
    'you smell like ass cheeks and gravy.',
    'you look like a fucked ass M\'Baku',
    'Shut yo skin tone chicken bone google chrome no home flip phone disowned ice cream cone garden gnome extra chromosome metronome dimmadome genome full blown monochrome student loan indiana jones overgrown flintstone x and y hormone friend zoned sylvester stallone sierra leone autozone professionally seen silver patrone head ass tf up',
    'Nigga just shut your bitch ass up like your so irreleavent in this server smh just like die',
    ''
    ]
  let rand = roasts[(Math.random() * roasts.length) | 0]
  message.channel.send(`<@${member.id}> ${rand}.`);  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};
 
exports.help = {
  name: "roast",
  category: "Fun",
  description: "Roast someone", 
  usage: ",roast <user>"
};
