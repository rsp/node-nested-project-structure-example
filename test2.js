var t = 'test2:', module = './dist/moduleA';
console.error(t, 'importing', module);
var {moduleA} = require(module);
console.error(t, moduleA.info);
process.exit(moduleA.info ? 0 : 1);
