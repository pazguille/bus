'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

exports.__esModule = true;
/**
 * Module dependencies
 */

var _Emitter = require('emitter');

var _Emitter2 = _interopRequireWildcard(_Emitter);

/**
 * Exports bus
 */
exports['default'] = new _Emitter2['default']();
module.exports = exports['default'];