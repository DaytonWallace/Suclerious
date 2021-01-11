exports.run = async (client, message, args) => {
   const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    message.channel.bulkDelete(deleteCount + 1)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    let msg = await message.reply("Deleted " + deleteCount + " messages!");
    msg.delete(3000)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["clear"],
  permLevel: "Moderator"
};

exports.help = {
  name: "prune",
  category: "Moderation",
  description: "Clears messages(Bear with this command for a few days, there are still bugs.)",
  usage: ",prune <number from 1 - 99>"
};