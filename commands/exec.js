exports.run = async (client, message, args, level) => {
  const Discord = require('discord.js')
  const exec = require('child_process').exec

  exec(args.join(' '), (err, stdout, stderr) => {
    const out = `\`\`\`prolog\n${err || ''+stderr+stdout}\`\`\``
    message.channel.send(out) 
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "exec",
  category: "System",
  description: "Execs de tingos",
  usage: ",exec [code]"
};