var t = 'test3:', module = './moduleA';
console.error(t, 'importing', module);
var {moduleA} = require(module);
console.error(t, moduleA.info);
process.exit(moduleA.info ? 0 : 1);
