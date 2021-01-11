const Discord = require('discord.js');
let time = new Date().toLocaleTimeString();

module.exports = (client, member) => {
  const settings = client.getGuildSettings(member.guild)
  const welcomeLog = settings.welcomeChannel.substr(2).substr(0, 18);
  
  if (settings.welcomeEnabled !== "true") return;

  const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag);

  let x = member.guild.channels.find(c => c.id === welcomeLog).send(welcomeMessage).catch(console.error);  
  console.log(member.tag + " just joined " + member.guild.name);
};