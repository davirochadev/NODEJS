const os = require('os');

const totalMem = os.totalmem();
const type = os.type();

console.log(totalMem);
console.log(type);