'use strict';

let util = require('util');
let assert = require('assert-plus');

function inspect(object, showHidden, levels) {
  assert.optionalBool(showHidden, 'showHidden');
  assert.optionalNumber(levels, 'levels');

  showHidden = showHidden || false;
  levels = levels || 9;
  return util.inspect(object, showHidden, levels);
}

module.exports = {
  inspect
};
