'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = splitter;
function splitter(code, pageName) {
  var startIndex = code.match(/<script.*>/).index;
  var endIndex = code.lastIndexOf('</script>') + 9;
  var data = code.slice(startIndex, endIndex);
  code = code.replace(data, '<script src="' + pageName + '.js" type="text/javascript" charset="utf-8"></script>');
  return {
    data: data.replace(/<script.*>|<\/script>/g, '').trim(),
    code: code
  };
};