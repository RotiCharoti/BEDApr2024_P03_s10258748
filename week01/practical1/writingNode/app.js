const fs = require('node:fs');

const content = 'Some contents!';

fs.writeFile('test3.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
