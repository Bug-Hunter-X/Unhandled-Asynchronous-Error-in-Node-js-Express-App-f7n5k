const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          // Simulate an asynchronous operation that might fail
          const result = await someAsyncOperation();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
    res.send('Hello');
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('Internal Server Error');
  }
});

async function someAsyncOperation() {
  //Simulate a failing operation
  //const nonExistentFile = require('./nonExistentFile.js');
  //throw new Error('File not found');
  return 'Success!';
}

app.listen(3000, () => console.log('Server listening on port 3000'));