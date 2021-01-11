exports.run = (client, message, args) => {
  const config = require('../config.js');
  
  let facts = [
    'Place of creation was deep in the pits of hell with Yosh and Diego.',
    'Favorite thing to do? Honestly talk to people on discord and make money.',
    'Favorite game? Gta or mortal kombat yes Diego made this command',
    'Whos my favorite creator? Diego 100% like totally sorry yosh',
    'My school is Diegos Fucked up mind',
    ]
  let rand = facts[(Math.random() * factss.length) | 0]
  message.channel.send(`<@${member.id}> ${rand}.`);  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};
 
exports.help = {
  name: "randomfacts",
  category: "Fun",
  description: "Random things about me", 
  usage: ",Talk <user>"
};