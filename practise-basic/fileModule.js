const fs = require('fs');

//-------Read file
fs.readFile('demo.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(`File:- ${data}`);
});

fs.writeFile('demo.txt', 'Welcome to Code sikh', (err) => {
    if (err) console.log(err);
});

//-----append file
fs.appendFile('demo.txt', '\n new line is added!', (err) => {
    if (err) console.log(err);
    console.log('New file is appended');
});
