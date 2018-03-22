export default function splitter(code, pageName) {
  let startIndex = code.match(/<script.*>/).index;
  let endIndex = code.lastIndexOf('</script>') + 9;
  let data = code.slice(startIndex, endIndex);
  code = code.replace(data, `<script src="${pageName}.js" type="text/javascript" charset="utf-8"></script>`);
  return {
    data: data.replace(/<script.*>|<\/script>/g, '').trim(),
    code: code
  };
};