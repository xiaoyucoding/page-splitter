export default function splitter(code, pageName) {
  let startIndex = code.match(/<style.*>/).index;
  let endIndex = code.lastIndexOf('</style>') + 8;
  let data = code.slice(startIndex, endIndex);
  code = code.replace(data, `<link rel="stylesheet" type="text/css" href="${pageName}.css"/>`);
  return {
    data: data.replace(/<style.*>|<\/style>/g, '').trim(),
    code: code
  };
};
