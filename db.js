let mysql = require('mysql');
let config = require('./config');
let state = {
  pool: null,
  mode: null
};
let options = {
  host: 'localhost',
  user: 'username',
  password: 'xxxxxxx',
  database: 'dbname'
};

exports.connect = function(mode, done) {
  options.database = mode === config.MODE_PRODUCTION ? config.PRODUCTION_DB : config.TEST_DB;
  state.pool = mysql.createPool(options);
  state.mode = mode;
  done();
};

exports.get = function() {
  return state.pool;
};

exports.config = config;
exports.options = options;
