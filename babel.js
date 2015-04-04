'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var babel = require('babel');

/**
 * Create directories
 */
if (!fs.existsSync('./es5')) {
  fs.mkdirSync('./es5');
}

/**
 * Babel
 */
babel.transformFile('index.js', {'loose': ['es6.modules']}, function (err, result) {
  if (err) { console.log('Error : ' + err.message); }
  fs.writeFileSync('./es5/index.js', result.code);
});
