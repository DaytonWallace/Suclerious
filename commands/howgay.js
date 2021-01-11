exports.run = (client, message, args) => {
  let parts = message.content.split(" ");
  
  let replys = [
    '0%',
    '5%',
    '10%',
    "15%",
    '20%',
    '25%',
    '30%',
    'Pretty fucking gay ngl',
    '35%',
    '40%',
    'Jus come out as bi',
    "50%",
    "Be honest u have gotten nudes from men",
    "100%",
    "69% (͡° ͜ʖ ͡°)",
    "Too gay for my comprehension",
    'Honestly your the gayest man i have ever met u have been nutted on a ton and i respect you'
    'GAY 4 LIFE'
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
  aliases: ['gm', "gay"],
  permLevel: "User"
};

exports.help = {
  name: "howgay",
  category: "Fun",
  description: "How gay are you!",
  usage: ",gaymeter"
};