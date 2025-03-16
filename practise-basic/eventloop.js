const fs = require('fs');
console.log('start');

process.nextTick(() => console.log('Process nextTick'));

Promise.resolve().then(() => console.log('Promise handling....'));

fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if (err) console.error(err);

    console.log('File reading...',data);
});

setTimeout(() => console.log('timer funciton'), 0);

setImmediate(() => console.log('Immediate function '));

console.log('end');

/**
 * expired timer function
 * io polling
 * setImmediate callback
 * close socket callback
 */
