let Discord = require('discord.js');

exports.run = (client, message, args, level) => {
  if (!args[0]) {
    const myCommands = message.guild ? client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level) : client.commands.filter(cmd => client.levelCache[cmd.conf.permLevel] <= level &&  cmd.conf.guildOnly !== true);

    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

    let currentCategory = "";
    let output = `= Command List =\n\n[Use ${message.settings.prefix}help <commandname> for details]\n\n`;
    const sorted = myCommands.array().sort((p, c) => p.help.category > c.help.category ? 1 :  p.help.name > c.help.name && p.help.category === c.help.category ? 1 : -1 );
    sorted.forEach( c => {
      const cat = c.help.category.toProperCase();
      if (currentCategory !== cat) {
        output += `\u200b\n== ${cat} ==\n`;
        currentCategory = cat;
      }
      output += `${message.settings.prefix}${c.help.name}${" ".repeat(longest - c.help.name.length)} :: ${c.help.description}\n`;
    });
    
    message.channel.send(output, {code: "asciidoc", split: { char: "\u200b" }});
    
  } else {

    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      let embed = new Discord.RichEmbed()
        .setColor(message.author.displayColor)
        .setTitle(command.help.name)
        .addField('Description', command.help.description, true)
        .addField('Usage: ', command.help.usage, false)
        .addField('Aliases: ', command.conf.aliases.join(message.settings.prefix, command.help.name) || 'none', true)
        .setFooter(`Requested by ${message.author.tag}`);
      message.channel.send(embed);
    } else if (args[0].toLowerCase() === "moderation") {
      client.commands.get(command.help.category === "Moderation")
      
    } else {
      message.reply('Command not recognized, try again');  
    }
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "halp"],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "Info",
  description: "Displays all the available commands for your permission level.",
  usage: ",help [command]"
}; 