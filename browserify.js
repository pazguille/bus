'use strict';

/**
 * Dependencies
 */
var fs = require('fs');
var browserify = require('browserify');

/**
 * Create directories
 */
if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

/**
 * Browserify
 */
browserify({'debug': true, 'standalone': 'bus'})
  .transform('babelify', {'loose': ['es6.modules']})
  .require('./index.js', {'entry': true})
  .bundle()
  .on('error', function (err) { console.log('Error : ' + err.message); })
  .pipe(fs.createWriteStream('dist/bus.js'));