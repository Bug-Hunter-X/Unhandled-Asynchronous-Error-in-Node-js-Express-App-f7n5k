# Unhandled Asynchronous Error in Node.js Express App

This repository demonstrates a common error in Node.js applications: unhandled errors in asynchronous operations.  Asynchronous operations (like those using `setTimeout`, `setInterval`, or promises) can result in errors that are not caught by standard `try...catch` blocks, leading to unexpected crashes.

The `bug.js` file shows an example Express.js app with an unhandled error. The `bugSolution.js` file demonstrates how to properly handle this type of error using promises or async/await with error handling.

## How to reproduce the bug
1. Clone this repo
2. Run `npm install express`
3. Run `node bug.js`
4. Access the server in your browser (http://localhost:3000)

You'll notice that the server crashes because the error from requiring a non-existent file is not caught.

## How to fix the bug
Examine the `bugSolution.js` file for a robust solution that addresses the asynchronous error handling.