exports.run = (client, message, args) => {
  let parts = message.content.split(" ");
  
  let replys = [
    ' You are gae ',
    ' Suck My Anus ',
    'Nah Bruh ',
    " I literaly dont care ",
    'Suck Me off nigga?',
    'MHM totally man 100% like fr mhm totally really omg bruh',
    'Why should I tell you?',
    'When did i ask ?',
    'Nigga i hate you your annoying',
    '...',
    'Your gay'
         ]
  
  let randrep = replys[(Math.random() * replys.length) | 0]
  
  if(parts[1] === undefined){
    message.reply('Ask me a question bruh.');
  } else {
    message.channel.send(randrep);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['8b'],
  permLevel: "User"
};

exports.help = {
  name: "8ball",
  category: "Fun",
  description: "Ask the magic 8 ball a question!",
  usage: ",8ball <question>"
};