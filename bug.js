const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    // This error is not handled by the try...catch block because it occurs asynchronously
    const nonExistentFile = require('./nonExistentFile.js');
    res.send('Hello');
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));