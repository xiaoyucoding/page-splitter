import path from 'path';
import fs from 'fs-extra';
import pageRewriter from './splitter';

module.exports = function rewriter(pagePath, options) {
  let ret = pageRewriter(pagePath, options);
  let pageName = pagePath.match(/([\w\-]+)\.html/)[1];
  fs.outputFileSync(path.join(options.dist, `${pageName}.html`), ret.html);
  fs.outputFileSync(path.join(options.dist, `${pageName}.css`), ret.css);
  fs.outputFileSync(path.join(options.dist, `${pageName}.js`), ret.js);
};
