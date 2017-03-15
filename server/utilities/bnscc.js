var request = require("request"),
  cheerio = require("cheerio");

module.exports = function (req, res) {
  request('http://' + req.params.region + '-bns.ncsoft.com/ingame/bs/character/profile?c=' + req.params.characterName, function (error, response, html) {
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
      var criticalHitBase = $(".attack .stat-define dd:nth-child(12) ul li:nth-child(1) .stat-point").text();
      var criticalHitEquipment = $(".attack .stat-define dd:nth-child(12) ul li:nth-child(2) .stat-point").text();
      var criticalHitRate = $(".attack .stat-define dd:nth-child(12) ul li:nth-child(3) .stat-point").text();

      var criticalDmgTotal = $(".attack .stat-define dt:nth-child(13) .stat-point").text();
      var criticalDmgBase = $(".attack .stat-define dd:nth-child(14) ul li:nth-child(1) .stat-point").text();
      var criticalDmgEquipment = $(".attack .stat-define dd:nth-child(14) ul li:nth-child(2) .stat-point").text();
      var criticalDmgBonus = $(".attack .stat-define dd:nth-child(14) ul li:nth-child(3) .stat-point").text();

      var masteryLvl = $(".attack .stat-define dt:nth-child(15) .stat-point").text();

      var additionalDmgTotal = $(".attack .stat-define dt:nth-child(17) .stat-point").text();
      var additionalDmgBonus = $(".attack .stat-define dd:nth-child(18) ul li:nth-child(1) .stat-point").text();

      var threatTotal = $(".attack .stat-define dt:nth-child(19) .stat-point").text();
      var threatBase = $(".attack .stat-define dd:nth-child(20) ul li:nth-child(1) .stat-point").text();
      var threatEquipment = $(".attack .stat-define dd:nth-child(20) ul li:nth-child(2) .stat-point").text();
      var threatBonus = $(".attack .stat-define dd:nth-child(20) ul li:nth-child(3) .stat-point").text();

      var flameDmgTotal = $(".attack .stat-define dt:nth-child(21) .stat-point").text();
      var flameDmgBase = $(".attack .stat-define dd:nth-child(22) ul li:nth-child(1) .stat-point").text();
      var flameDmgEquipment = $(".attack .stat-define dd:nth-child(22) ul li:nth-child(2) .stat-point").text();
      var flameDmgRate = $(".attack .stat-define dd:nth-child(22) ul li:nth-child(3) .stat-point").text();

      var frostDmgTotal = $(".attack .stat-define dt:nth-child(23) .stat-point").text();
      var frostDmgBase = $(".attack .stat-define dd:nth-child(24) ul li:nth-child(1) .stat-point").text();
      var frostDmgEquipment = $(".attack .stat-define dd:nth-child(24) ul li:nth-child(2) .stat-point").text();
      var frostDmgRate = $(".attack .stat-define dd:nth-child(24) ul li:nth-child(3) .stat-point").text();

      //defense
      var hpTotal = $(".defense .stat-define dt:nth-child(1) .stat-point").text();
      var hpBase = $(".defense .stat-define dd:nth-child(2) ul li:nth-child(1) .stat-point").text();
      var hpEquipment = $(".defense .stat-define dd:nth-child(2) ul li:nth-child(2) .stat-point").text();

      var defTotal = $(".defense .stat-define dt:nth-child(5) .stat-point").text();
      var defBase = $(".defense .stat-define dd:nth-child(6) ul li:nth-child(1) .stat-point").text();
      var defEquipment = $(".defense .stat-define dd:nth-child(6) ul li:nth-child(2) .stat-point").text();
      var piercingDef = $(".defense .stat-define dd:nth-child(6) ul li:nth-child(3) .stat-point").text();
      var piercingBlock = $(".defense .stat-define dd:nth-child(6) ul li:nth-child(4) .stat-point").text();

      var accuracyTotal = $(".defense .stat-define dt:nth-child(7) .stat-point").text();
      var accuracyBase = $(".defense .stat-define dd:nth-child(8) ul li:nth-child(1) .stat-point").text();
      var accuracyEquipment = $(".defense .stat-define dd:nth-child(8) ul li:nth-child(2) .stat-point").text();
      var accuracyHitRate = $(".defense .stat-define dd:nth-child(8) ul li:nth-child(3) .stat-point").text();

      var concentrationTotal = $(".defense .stat-define dt:nth-child(9) .stat-point").text();
      var concentrationBase = $(".defense .stat-define dd:nth-child(10) ul li:nth-child(1) .stat-point").text();
      var concentrationEquipment = $(".defense .stat-define dd:nth-child(10) ul li:nth-child(2) .stat-point").text();
      var concentrationBlock = $(".defense .stat-define dd:nth-child(10) ul li:nth-child(3) .stat-point").text();
      var concentrationCounter = $(".defense .stat-define dd:nth-child(10) ul li:nth-child(4) .stat-point").text();

      var criticalHitTotal = $(".defense .stat-define dt:nth-child(11) .stat-point").text();
      var criticalDmgTotal = $(".defense .stat-define dt:nth-child(13) .stat-point").text();
      var masteryLvl = $(".defense .stat-define dt:nth-child(15) .stat-point").text();
      var additionalDmgTotal = $(".defense .stat-define dt:nth-child(17) .stat-point").text();
      var threatTotal = $(".defense .stat-define dt:nth-child(19) .stat-point").text();
      var flameDmgTotal = $(".defense .stat-define dt:nth-child(21) .stat-point").text();
      var frostDmgTotal = $(".defense .stat-define dt:nth-child(23) .stat-point").text();


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
              base: parseInt(criticalHitBase),
              equipment: parseInt(criticalHitEquipment),
              blockPiercing: criticalHitRate,
              total: parseInt(criticalHitTotal)
            },
            criticalDamage: {
              base: parseInt(criticalDmgBase),
              equipment: parseInt(criticalDmgEquipment),
              bonus: criticalDmgBonus,
              total: parseInt(criticalDmgTotal)
            },
            additionalDmg: {
              total: parseInt(additionalDmgTotal),
              bonus: additionalDmgBonus
            },
            threat: {
              total: parseInt(threatTotal),
              base: parseInt(threatBase),
              equipment: parseInt(threatEquipment),
              bonus: threatBonus,
            },
            flameDmg: {
              base: parseInt(flameDmgBase),
              equipment: parseInt(flameDmgEquipment),
              rate: flameDmgRate,
              total: parseInt(flameDmgTotal)
            },
            frostDmg: {
              base: parseInt(frostDmgBase),
              equipment: parseInt(frostDmgEquipment),
              rate: frostDmgRate,
              total: parseInt(frostDmgTotal)
            }
          },
          HP: {
            hp: {
              base: hpBase,
              equipment: hpEquipment,
              total: hpTotal,
            },
            defense: {
              base: defBase,
              equipment: defEquipment,
              total: defTotal,
            },

          }
        }
      };

      res.json(basicCharData);
    }
  });
};
