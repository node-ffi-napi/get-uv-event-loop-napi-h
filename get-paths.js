'use strict';
const symbol = require('get-symbol-from-current-process-h');
const path = require('path');
exports.include = path.resolve(__dirname, 'include') + ' ' + symbol.include;
exports.gyp = symbol.gyp;
