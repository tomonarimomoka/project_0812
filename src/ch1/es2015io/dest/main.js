'use strict';

var _calctest = require('./calctest.js');

var _kakezan = require('./kakezan');

var _kakezan2 = _interopRequireDefault(_kakezan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("********Execute main.js******************");
console.log((0, _calctest.add)(2, 3));
console.log((0, _calctest.mul)(6, 8));

var v = (0, _kakezan2.default)(2, 3);
console.log(v);