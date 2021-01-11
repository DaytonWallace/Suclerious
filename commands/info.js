const Discord = require('discord.js');

exports.run = (client, message, args) => {
 let parts = message.content.split(" ");
  
  if (!parts[1]) return message.reply(`Run the command \`${message.settings.prefix}help info\``)
  
  if (parts[1].toLowerCase() === "role") {
    if (parts[2]) {
    let grole = message.guild.roles.find(role => role.name === args[1]);
      
      if (!grole) return message.reply("What role do you want info on?")
      
      const roleEmbed = new Discord.RichEmbed()
        .setTitle(grole.name)
        .setColor(grole.color)
        .addField('ID: ', grole.id, true)
        .addField('Color', grole.color, true)
        .addField('Hoist', grole.hoist, true)
        .addField('Members', grole.members.size, true)
        .addField('Position', grole.position, true)
        .addField('Mentionable', grole.mentionable, true)
        .setFooter('Developed by Yosh#7203')
        
      
      message.channel.send(roleEmbed)
    }
    else {
      message.reply("Provide a role, dommi");
    }
  }
  
  if (parts[1].toLowerCase === "user") {
    let member = message.guild.members.get(message.mentions.members.first().id)
    
    if (!member) return message.reply("Who do you want info on?");
    
    const userEmbed = new Discord.RichEmbed()
      .setTitle(member.username + member.discriminator + '\'s Info')
      .setColor(message.member.displayColor)
      .addField('ID: ', member.id, true)
      .addField('Color: ', member.displayHexColor, true)
      .addField('Joined this server on: ', member.joinedAt, true)
      .addField('Status: ', member.presence.status, true)
      .addField('Game: ', member.presence.game, true)
      .addField('Roles: ', member.roles.size, true)
      .addField('Highest role: ', member.highestRole, true)
    message.channel.send(userEmbed)
  }
  
  if (parts[1].toLowerCase() === "server") {
    let moment = require('moment');
    let time = moment().format('ddd, Do of MMM @ HH:mm:ss');
    const embed = new Discord.RichEmbed()
      .setTitle(`${message.guild.name}'s info`)
      .setColor(message.member.displayColor)
      .addField('Owner :crown::', message.guild.owner.user.tag)
      .addField('Members :1234::', `${message.guild.memberCount -  message.guild.members.filter(member => member.user.bot).size} human(s), and ${message.guild.members.filter(member => member.user.bot).size} bot(s).`)
      .addField('Created on :clock::', message.guild.createdAt)
      .addField('Roles :scroll::', message.guild.roles.size)
      .addField('Emojis :grinning::', message.guild.emojis.size)
      .addField('Channels :tv::', message.guild.channels.size)
      .addField('ID :id::', message.guild.id)
      .setFooter(`Requested by ${message.author.tag}. This information was requested on ${time}`);

    message.channel.send(embed)
  }
  
  if (parts[1].toLowerCase() === "bot") {
    let embed = new Discord.RichEmbed()
      .setTitle('Decerious\'s info')
      .setColor(message.member.displayColor)
      .setDescription('Hey! My name is Decerious! I am a new multipurpose bot made by Yosh#7203. My default prefix is `,` although it can be customized. In most of the servers I am in, people love me, but sometimes abuse me. Please do not indulge in on that, as I can crash.')
    message.channel.send(embed);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "Info",
  description: "Gives you information on the specified element",
  usage: ",info <role/user/server>"
};