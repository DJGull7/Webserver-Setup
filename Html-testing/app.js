const path = require('path');

var pathObj = path.parse(__filename);
console.log(pathObj)
const os = require('os');
var SysMem = os.totalmem();
console.log(SysMem);