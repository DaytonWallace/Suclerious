const Discord = require("discord.js");
const parsems = require("ms");

exports.run = async (client, message, args, member) => {
  if (!client.settings.has(message.guild.id)) client.settings.set(message.guild.name, {});
  
  const modlog = message.settings.modLogChannel.substr(2).substr(0, 18);

  let reason = args.slice(1).join(' ');
  if(!reason)
  return message.reply("Please type a reason for the mute!");

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("KICK_MEMBERS")) return message.reply("Can't mute them!");
  let muterole = message.guild.roles.find(role => role.name === message.settings.mutedRole)
  //start of create role
  if(!muterole && message.guild.roles.find(role => role.name === "DeceriousMuted")){
    try{
      muterole = await message.guild.createRole({
        name: "DeceriousMuted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(mutetime === parseInt(mutetime, 10)) return message.reply("You didn't specify a time!");

  await(tomute.addRole(muterole));
  message.reply(`<@${tomute.id}> has been muted for ${parsems(parsems(mutetime))}`);

  setTimeout(function(){
    if (tomute.roles.find(role => role.name === muterole)) {
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> has been unmuted!`);
    } else return
  }, parsems(mutetime));
    
  let embed = new Discord.RichEmbed()
    .setColor(message.member.displayColor)
    .addField("MUTED", tomute, true)
    .addField("Reason", reason.slice(4), true)
    .addField('Length', mutetime, true)
    .addField("Muted by:", message.author.tag, true)
    .setFooter('Developed by Yosh#7203');

  let sendmod = message.guild.channels.get(modlog)
  sendmod.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "mute",
  category: "Moderation",
  description: "Mutes a user",
  usage: ",mute <user> <time> <reason>"
};
