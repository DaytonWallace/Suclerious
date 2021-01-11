var request = require('request');
var mcPort = 25565; // Your MC server port (25565 is the default)

exports.run = (client, message, args) => {  


  var mcIP = args.join(" "); // Your MC server IP or hostname address
 /* 
    let mcPort
  mcPort = args.slice(1); // Your MC server Port
  mcPort = mcPort.join(" "); */
  
  
  
  if(!mcIP[0]) return message.reply("Please tell us an Minecraft server IP (**Just** mc IP, without port.) server to proceed.");
 // if(!mcPort[0]) mcPort = 25565 //Bot sets the port as default
   
        var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Experiencing errors, sorry, try later.');
            }
                   
            body = JSON.parse(body);
            var status = 'Minecraft server: ' + mcIP /*+ ':' + mcPort */+ ' is currently *offline*';
          
            if(body.online) {
                status = 'Minecraft server: ' + mcIP +/* ':' + mcPort + */' is **online**  -  ';
              
                if(body.players.now) {
                    status += '**' + body.players.now + '** people are playing!';
                } else {
                    status += '*Nobody is playing! The server is dead!*';
                }    
            }
          
            message.reply(status);
        });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mcserver","mcs"],
  permLevel: "User"
};

exports.help = {
  name: "MCserver",
  category: "Fun",
  description: "Shows stats of a mc server. <needs to be updated>",
  usage: ",minecraftserver "
};
// Made by Incognito#7073