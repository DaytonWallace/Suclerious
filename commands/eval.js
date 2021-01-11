exports.run = async (client, message, args, level) => {
  const code = args.join(" ");
  try {
    var evaled = eval(code);
    var clean = evaled
    if (typeof evaled != 'string') clean = require('util').inspect(evaled)
    message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "eval",
  category: "System",
  description: "Evaluates de tingos",
  usage: ",eval [code]"
};