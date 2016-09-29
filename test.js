var {moduleA} = require(__dirname);
console.error(moduleA.info);
process.exit(moduleA.info ? 0 : 1);
