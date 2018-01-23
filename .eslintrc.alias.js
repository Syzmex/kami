
const path = require('path');
const nodeResolver = require('eslint-import-resolver-node');

exports.interfaceVersion = 2;
exports.resolve = (source, file, config) => {

  let findPath = source;

  if ( typeof config === 'object' ) {
    for (let i = 0, len = config.length; i < len; i++) {
      const re = new RegExp(`(^|/)${config[i][0]}($|/)`);
      const match = source.match(re);
      if (match) {
        const realPath = path.join(__dirname, config[i][1]);
        findPath = source.replace(match[0], `${match[1]}${realPath}${match[2]}`);
        break;
      }
    }
  }

  return nodeResolver.resolve(findPath, file, config);
};
