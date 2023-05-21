const fs = require('fs');

const content = 'Hello Node';

fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('An error occurred while creating the file:', err);
  } else {
    console.log('The file "welcome.txt" has been created successfully.');
  }
});
