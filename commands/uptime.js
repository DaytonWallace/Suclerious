const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  
  message.reply(`I have been online for ${duration}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "uptime",
  category: "Info",
  description: "Gives the uptime of Decerious.",
  usage: ",uptime"
};