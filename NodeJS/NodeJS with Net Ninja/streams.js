const fs = require('fs');

const readStream = fs.createReadStream('data path', { encoding: 'utf8' }); // utf8 makes it readable
const writeStream = fs.createWriteStream('data path');

readStream.on('data', (chunk) => {
  console.log('---chunk');
  console.log(chunk);
  writeStream('\nNew Chunk\n');
  writeStream.write(chunk);
});
