var request = require("request"),
  cheerio = require("cheerio");

module.exports = function (req, res) {
  request('http://na-bns.ncsoft.com/ingame/bs/character/profile?c=' + req.params.characterName, function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      var username = $(".signature dt a").text();
      var charName = $(".signature dt span").text();
      charName = charName.substr(1, charName.length - 2);
      var charClass = $(".desc ul li:nth-child(1)").text();
      var charLevel = $(".desc ul li:nth-child(2)").text().split('•')[0].trim(' ');
      var hongmoonLevel = $(".masteryLv").text();
      var charServer = $(".desc ul li:nth-child(3)").text();
      var charFaction = $(".desc ul li:nth-child(4)").text();
      var charGuild = $(".guild").text();

      var basicCharData = {
        username,
        name: charName,
        class: charClass,
        level: parseInt(charLevel.split(" ")[1]),
        hongmoonLevel: parseInt(hongmoonLevel.split(" ")[1]) || 0,
        server: charServer,
        faction: charFaction,
        guild: charGuild
      };

      res.json(basicCharData);
    }
  });
};
