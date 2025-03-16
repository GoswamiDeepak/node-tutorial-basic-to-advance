const { Readable, Writable } = require('stream');

const readAbleSteam = new Readable({
    highWaterMark: 6,
    read() {},
});

const writeableSteam = new Writable({
    write(s) {
        console.log('writing data:', s.toString());
    },
});
readAbleSteam.on('data', (chunk) => {
    // console.log('Data is Coming:-', chunk.toString());
    writeableSteam.write(chunk);
});

console.log(readAbleSteam.push('Welcome to Node God')); //false more the 2
// console.log(readAbleSteam.push('a')) //true less then 2
