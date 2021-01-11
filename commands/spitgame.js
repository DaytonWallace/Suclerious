exports.run = (client, message, args) => {
  if (!args[0]) {
    message.channel.send(`${message.settings.prefix}spitgame <woah/oof/fuck/damn/deepthroat>`);
  }
  
  if (!message.channel.nsfw) return message.reply('Not an NSFW channel');
  
  if (args[0] === "woah") {
   const woahLewd = [
     'Woah, my dick fills your pussy.',
     'Woah, my dick is the biggest in the server',
     'Woah, your pussy smells so bad not even the thirstiest motherfucker wouldn\'t even fuck that'
    ]
     let rand = woahLewd[(Math.random() * woahLewd.length) | 0]
     message.reply(rand)
  }
  
  if (args[0] === "oof") {
    const oofLewd = [
      'Oof, is what you would say when I\'m done fucking you.',
      'Oof, you passed out from the sight of my massive dick',
      'Oof, I caught an STI from you',
      'Oof, I caught an STD from you'
    ]
    let rand = oofLewd[(Math.random() * oofLewd.length) | 0]
    message.reply(rand)
  }
  
  if (args[0] === "fuck") {
    const fuckLewd = [
      'Fuck yes daddy, is what you say when I\'m filling your pussy',
      'Fuck, to the no I would not hit that nasty, stinky, hairy pussy',
      'Fuck, I forgot to pull out'
    ]
    let rand = fuckLewd[(Math.random() * fuckLewd.length) | 0]
    message.reply(rand)
  }
  
  if (args[0] === "damn") {
    const damnLewd = [
      'Damn, your pussy tight af. This might not be a one night stand, but a two night stand.',
      'Damn, you ugly than a motherfucker',
      'Damn, your pussy can take my whole 13 inch dick',
      'Damn, your pussy stinks. Go away'
    ]
    let rand = damnLewd[(Math.random() * damnLewd.length) | 0]
    message.reply(rand)
  }
  
  if (args[0] === "deepthroat") {
    const deepthroatLewd = [
      'Deepthroat me and you will die from choking',
      'Attempt to deepthroat me, my dick will be in your intestines',
      'I deepthroat your massive, delicious titties'
    ]
    let rand = deepthroatLewd[(Math.random() * deepthroatLewd.length) | 0]
    message.reply(rand)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['spit'],
  permLevel: "User"
};

exports.help = {
  name: "spitgame",
  category: "Fun",
  description: "Let me spit game with you",
  usage: ",spitgame"
};