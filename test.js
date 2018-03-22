const htmlSplitter = require('./lib');
const path = require('path');

htmlSplitter('./test/index.html', {
  dist: path.join(__dirname, './test/output')
});
