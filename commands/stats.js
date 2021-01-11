const { version } = require("discord.js");
const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

exports.run = async(client, message, args) => {
  const msg = await message.channel.send("Fetching ping...");
  msg.edit(`Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms`);
  let ping = parseInt(msg.createdTimestamp - message.createdTimestamp);
  msg.delete();
  
  let memAverage = ~~(2e-1 + process.memoryUsage().heapUsed / 1024 / 1024);
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  let time = moment().format('ddd, Do of MMM @ HH:mm:ss');
  
    message.channel.send(new Discord.RichEmbed()
      .setDescription("Information on Jim.")
      .setColor(message.member.displayColor)
      .addField('Name', client.user.tag, true)
      .addField('• Uptime', duration, true)
      .addField('• Total Users', client.users.size, true)
      .addField('• Total Servers', client.guilds.size, true)
      .addField('• Total Channels', client.channels.size, true)
      .addField('• Discord.js', Discord.version, true)
      .addField('• Node', process.version, true)
      .addField('• Owner', 'Yosh#7203', true)
      .addField('• Mem Usage', `${memAverage} MB`, true)
      .addField('Ping',  2e-1 + 100 * ping / 100, true)
      .addField('Created On', client.user.createdAt, true)
      .setFooter(`Requested by ${message.author.tag} at ${time}`))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "System",
  description: "Gives some useful bot statistics",
  usage: "stats"
};