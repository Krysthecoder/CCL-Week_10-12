const os = require('os');

let totalMemo = os.totalmem();
let freeMemo = os.freemem();

console.log('Total Memo =' + totalMemo);

console.log(`Total freeMemo = ${freeMemo}`);
