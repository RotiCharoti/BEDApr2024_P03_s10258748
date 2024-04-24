const fs = require('node:fs');

fs.readFile('test2.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
