exports.run = async (client, message) => {
      const member = message.mentions.members.first();
 
  const rank = [`Bot Admin`,
               `Bot Owner`,
               `Moderator`,
               `Administrator`]
  let rand = rank[(Math.random() * rank.length) | 0]
  const msg = await message.channel.send(`Opping. . . ` + member + ` in progress`)
  setTimeout(guntohead(), 2000)
 
    function guntohead(){
    return function(){
      msg.edit('Opping. . . ' + member + ' in progress.');
      setTimeout(trigger(), 1000)
    }
  }
  function trigger(){
    return function(){
      msg.edit('Opping. . . ' + member + ' in progress. .');
      setTimeout(shoot(), 1000)
    }
  }
  function shoot(){
    return function(){
      msg.edit('Done! Now ' + member + ' is ~~fake~~ ' + rand )
      
    }
  }
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['op'],
  permLevel: "user"
};
 
exports.help = {
  name: "op",
  category: "Fun",
  description: "A fun cmd that ~~fake~~ ops you", 
  usage: ",op <user>"
};