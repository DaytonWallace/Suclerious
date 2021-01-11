exports.run = async (client, message, args, level) => { 
  const msg = await message.channel.send("Fetching ping...");
  msg.edit(`Pong!ball Latency is ${parseInt(msg.createdTimestamp - message.createdTimestamp)}ms. API Latency is ${Math.round(client.ping)}ms`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Misc",
  description: "Shows the bot's latency.",
  usage: ",ping"
};