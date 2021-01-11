exports.run = async (client, message, args, level) => {
  await message.reply("Rebooting...");
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  });
  process.exit();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Bot Admin"
};

exports.help = {
  name: "reboot",
  category: "System",
  description: "Shuts down the bot.",
  usage: "reboot"
};