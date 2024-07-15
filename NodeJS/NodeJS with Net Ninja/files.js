const fs = require('fs'); // import file system that allows us to work on fiels
const { CLIENT_RENEG_LIMIT } = require('tls');

// reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log(
//   'last line proves that readFile() is async and takes time to do the call back'
// );

// write files
// fs.writeFile('./docs/blog1.txt', 'hello, world', () => {
//   //will replace the content
//   console.log('file was writen');
// });

// fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//   // will create a new file
//   console.log('file was writen');
// });

// directories => create new directories
// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', (err) => {
//     if (err) {
//       console.log('folder already exist');
//     }
//     console.log('folder created');
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder deleted');
//   });
// }

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}
