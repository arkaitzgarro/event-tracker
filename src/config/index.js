const devConf = require('./dev.conf');
const prdConf = require('./prd.conf');

const env = process.env.NODE_ENV || 'DEV';

const configs = {
  DEV: devConf,
  TST: {},
  PRD: prdConf,
};

module.exports = configs[env];
