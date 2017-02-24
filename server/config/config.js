'use strict';

let path = require('path');

let utils = require('../utilities/utils');
let rootPath = path.normalize(__dirname + '/../../');

function isEnv(e) {
  return process.env.NODE_ENV === e;
}

function createKey(name) {
  return `BNS_TREE_${name.toUpperCase()}`;
}

function setEnv(name, defaultValue, override) {
  let key = createKey(name);
  if (override)
    process.env[key] = defaultValue;
  else
    process.env[key] = process.env[key] || defaultValue;
}

function getEnv(name) {
  let key = createKey(name);
  return process.env[key];
}

setEnv('port', 3030);
setEnv('bnstree_api', 'http://localhost:3031');

let config = {
  self: {
    port: getEnv('port'),
    rootPath: rootPath,
    closit_api: getEnv('bnstree_api')
  }
};

console.log(utils.inspect(config));
module.exports = config;
