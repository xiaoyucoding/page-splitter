'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitter;
function splitter(code, pageName) {
  var startIndex = code.match(/<style.*>/).index;
  var endIndex = code.lastIndexOf('</style>') + 8;
  var data = code.slice(startIndex, endIndex);
  code = code.replace(data, '<link rel="stylesheet" type="text/css" href="' + pageName + '.css"/>');
  return {
    data: data.replace(/<style.*>|<\/style>/g, '').trim(),
    code: code
  };
};