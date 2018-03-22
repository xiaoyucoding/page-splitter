'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitter;

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _styleSplitter = require('./style-splitter');

var _styleSplitter2 = _interopRequireDefault(_styleSplitter);

var _scriptSplitter = require('./script-splitter');

var _scriptSplitter2 = _interopRequireDefault(_scriptSplitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function splitter(pagePath, options) {
  var pageName = pagePath.match(/([\w\-]+)\.html/)[1];
  var styleRet = (0, _styleSplitter2.default)(_fsExtra2.default.readFileSync(pagePath).toString(), pageName);
  var scriptRet = (0, _scriptSplitter2.default)(styleRet.code, pageName);

  return {
    html: scriptRet.code,
    css: styleRet.data,
    js: scriptRet.data
  };
};