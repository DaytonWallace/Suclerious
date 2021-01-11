
exports.run = async (client, message, args) => {
  
  //Insert here quotes
  const quotes = [`"Kys" - Brandon, No.1`,
                 `"I'm died" - Abuser, No.2`,
                 `"This is Death of Rebirth" - IncogBot at near your cinema, No.3`,
                 `"Whotes" - Joevy the typo, No.4`,
                 `"Sometimes the easiest solution is the last thing on your mind" - DashieGames, 2018. No.5`,
                 `"Code my ass" - The older version coder of Incognito, No.6`,
                 `"Nothing can stop a person with strong determination from achieving their dreams" - Thomas Jefferson, No.7`,
                 `"Instead of giving myself reasons why I can't, I give myself reasons why I can." - Anonymous, No.8`,
                 `"Ambition is the path to success. Persistence is the vehicle you arrive in." - William Eardley, No.9`,
                 `"When everything is against you, keep calm and take a deep breath, then you can deal with them" - Anonymous, No.10`,
                 `"Chan warm the bed im coming" - Abuser, No.11`,
                 `"Let us rock" JeBaited the Rock, No.12`,
                 `"I'm leaving Julia" - Cibi, No.13`,
                 `"I always pour cereal after covering nyx with milk" - Simon, No.14`,
                 `"I WILL LOVE YOU IN YOUR SLEEP" - Abuser, No.15`,
                 `"I used to think I was indecisive, but now I'm not too sure" -  Yosh, No.16`,
                 `"A loli a day keeps the sadness away" - Neko, No.17`,
                 `"why can geodude be female? its geoDUDE" -twit 2018, No.18`,
                 `"wassup underwears" - Clashio, No.19`,
                 `"Go self destruct" - Emerald, No.20`,
                 `"All the things I really like to do are either immoral, illegal or fattening." - Simon the Chase, No.21`,
                 `"THERE'S BIG DIFFERENCE BETWEEN BEING UNIQUE AND BEING GAY" - Silent 2k19, No.22`,
                 `"Periods don't change much" - Pugger, 2019, No. 23`,
                 `"HOLY WOWSY MR. KRABBY I'M REALLY FEELING IT!!" -M3G4 T3RR4, No.24`,
                 `"WHAT THE FUCK IS A PHYSICS -Super1337 lion tamer", No.25`,
                 `"I'm back boys from the day of the first april fools ban!" - Incognito 2k19 No.26`,
                 `"Everybody knows what I look like BUT SOME KNOW WHAT I LOOK LIKE" - Ava 2019 No.27`,
                 `"Say that to my boney japanese ass" -Saki`]
  
  
  var rand = quotes[(Math.random() * quotes.length) | 0]
  message.channel.send(rand);
};
     
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "quote",
  category: "Misc",
  description: "Tells a quote from a random guy.",
  usage: ",quote"
};                                      