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

      //attack stats
      var attackTotal = $(".attack .stat-define dt:nth-child(1) .stat-point").text();
      var attackBase = $(".attack .stat-define dd:nth-child(2) ul li:nth-child(1) .stat-point").text();
      var attackEquipment = $(".attack .stat-define dd:nth-child(2) ul li:nth-child(2) .stat-point").text();

      var piercingTotal = $(".attack .stat-define dt:nth-child(5) .stat-point").text();
      var piercingBase = $(".attack .stat-define dd:nth-child(6) ul li:nth-child(1) .stat-point").text();
      var piercingEquipment = $(".attack .stat-define dd:nth-child(6) ul li:nth-child(2) .stat-point").text();
      var piercingDef = $(".attack .stat-define dd:nth-child(6) ul li:nth-child(3) .stat-point").text();
      var piercingBlock = $(".attack .stat-define dd:nth-child(6) ul li:nth-child(4) .stat-point").text();

      var accuracyTotal = $(".attack .stat-define dt:nth-child(7) .stat-point").text();
      var accuracyBase = $(".attack .stat-define dd:nth-child(8) ul li:nth-child(1) .stat-point").text();
      var accuracyEquipment = $(".attack .stat-define dd:nth-child(8) ul li:nth-child(2) .stat-point").text();
      var accuracyHitRate = $(".attack .stat-define dd:nth-child(8) ul li:nth-child(3) .stat-point").text();

      var concentrationTotal = $(".attack .stat-define dt:nth-child(9) .stat-point").text();
      var concentrationBase = $(".attack .stat-define dd:nth-child(10) ul li:nth-child(1) .stat-point").text();
      var concentrationEquipment = $(".attack .stat-define dd:nth-child(10) ul li:nth-child(2) .stat-point").text();
      var concentrationBlock = $(".attack .stat-define dd:nth-child(10) ul li:nth-child(3) .stat-point").text();
      var concentrationCounter = $(".attack .stat-define dd:nth-child(10) ul li:nth-child(4) .stat-point").text();

      var criticalHitTotal = $(".attack .stat-define dt:nth-child(11) .stat-point").text();
      var criticalDmgTotal = $(".attack .stat-define dt:nth-child(13) .stat-point").text();
      var masteryLvl = $(".attack .stat-define dt:nth-child(15) .stat-point").text();
      var additionalDmgTotal = $(".attack .stat-define dt:nth-child(17) .stat-point").text();
      var threatTotal = $(".attack .stat-define dt:nth-child(19) .stat-point").text();
      var flameDmgTotal = $(".attack .stat-define dt:nth-child(21) .stat-point").text();
      var frostDmgTotal = $(".attack .stat-define dt:nth-child(23) .stat-point").text();




      var basicCharData = {
        username,
        name: charName,
        class: charClass,
        level: parseInt(charLevel.split(" ")[1]),
        hongmoonLevel: parseInt(hongmoonLevel.split(" ")[1]) || 0,
        server: charServer,
        faction: charFaction,
        guild: charGuild,
        stats: {
          attack: {
            masteryLvl: parseInt(masteryLvl.split(" ")[1]) || 0,
            attack: {
              base: parseInt(attackBase),
              equipment: parseInt(attackEquipment),
              total: parseInt(attackTotal)
            },
            piercing: {
              base: parseInt(piercingBase),
              equipment: parseInt(piercingEquipment),
              defPiercing: piercingDef,
              blockPiercing: piercingBlock,
              total: parseInt(piercingTotal)
            },
            accuracy: {
              base: parseInt(accuracyBase),
              equipment: parseInt(accuracyEquipment),
              hitRate: accuracyHitRate,
              total: parseInt(accuracyTotal)
            },
            concentration: {
              base: parseInt(concentrationBase),
              equipment: parseInt(concentrationEquipment),
              blockPiercing: concentrationBlock,
              counterPiercing: concentrationCounter,
              total: parseInt(concentrationTotal)
            },
            criticalHit: {
              total: parseInt(criticalHitTotal)
            },
            criticalDamage: {
              total: parseInt(criticalDmgTotal)
            },
            additionalDmg: {
              total: parseInt(additionalDmgTotal)
            },
            threat: {
              total: parseInt(threatTotal)
            },
            flameDmg: {
              total: parseInt(flameDmgTotal)
            },
            frostDmg: {
              total: parseInt(frostDmgTotal)
            }
          },
          HP: {
            hpTotal: 0,
            defense: 0,

          }
        }
      };

      res.json(basicCharData);
    }
  });
};
