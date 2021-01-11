const Discord = require('discord.js');
const config = require('../config.js')

exports.run = (client, message, args, attachment) => {
    const mem = message.mentions.members.first();
    const discord = require("discord.js")
  
  if (!mem) return message.channel.send(`I don't find any mentions, please mention a user to ban`);
  
  if (message.mem === message.author.bot) return message.channel.send(`Ew, i don't wanna to ban my friend (bot)`);
  
  if (mem.id === client.user.id) return message.channel.send(`I'm not gonna fall so easy for this trick.`);
    
  if (mem.id === config.ownerID) return message.channel.send(`No, why i should ban my favorite people?`)
  
    let reason
  reason = args.slice(1);
  reason = reason.join(" ");
  
  if (!reason) {
    reason = "because your unwanted";
  }
   
  message.channel.send(`Bai bai, ` + mem + `! You got banned for: ` + reason)
  message.channel.send(`https://tenor.com/view/slap-ban-banned-permabanned-ghj-gif-5649654`)
  let embed = new Discord.RichEmbed()
    .setTitle('BANNED')
    .setDescription(`Banned by ${message.author.tag}`)
    .addField('Reason: ', reason, false)
    .setFooter('NOTE: THIS IS A FAKE BAN');
  
  mem.send(embed)

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`fb`, `fakeban`],
  permLevel: "User" 
};

exports.help = {
  name: "b4n",
  category: "Fun",
  description: "Fake ban.",
  usage: ",b4n <member>"
};

