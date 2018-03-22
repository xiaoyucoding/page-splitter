'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _splitter = require('./splitter');

var _splitter2 = _interopRequireDefault(_splitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function rewriter(pagePath, options) {
  var ret = (0, _splitter2.default)(pagePath, options);
  var pageName = pagePath.match(/([\w\-]+)\.html/)[1];
  _fsExtra2.default.outputFileSync(_path2.default.join(options.dist, pageName + '.html'), ret.html);
  _fsExtra2.default.outputFileSync(_path2.default.join(options.dist, pageName + '.css'), ret.css);
  _fsExtra2.default.outputFileSync(_path2.default.join(options.dist, pageName + '.js'), ret.js);
};