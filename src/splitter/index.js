import fs from 'fs-extra';
import styleSplitter from './style-splitter';
import scriptSplitter from './script-splitter';

export default function splitter(pagePath, options) {
  let pageName = pagePath.match(/([\w\-]+)\.html/)[1];
  let styleRet = styleSplitter(fs.readFileSync(pagePath).toString(), pageName);
  let scriptRet = scriptSplitter(styleRet.code, pageName);

  return {
    html: scriptRet.code,
    css: styleRet.data,
    js: scriptRet.data
  };
};
