const express = require('express');
const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

const app = express();

app.get('/', (req, res) => {
    // const file = readFileSync('demo.txt');
    // res.end(file);
    // const file = readFileSync(path.join(__dirname, 'img.png'));
    // res.sendFile(path.join(__dirname, 'img.png'));
    // res.send(`<pre>${file}</pre>`);
    // const videoPath = path.join(__dirname, 'video.mp4');
    // const file = fs.readFileSync(videoPath);
    // res.set('Content-Type', 'video/mp4');
    // res.end(file);

    //----------String Processing------------[filter fuck word to antoher word]
    const readableStream = fs.createReadStream('vulgarWord.txt');
    const writeableStream = fs.createWriteStream('output.txt');
    const tranformStream = new Transform({
        transform(chunk, encoding, callback) {
            const modifiedString = chunk.toString().replaceAll(/fuck/gi, 'cool');
            callback(null, modifiedString);
        },
    });
    /*
    //**********  Method 1  ***********
    readableStream.on('data', (chunk) => {
        console.log('Data received: ', chunk.toString());

        const upperCase = chunk.toString().toUpperCase();
        const finalString = upperCase.replaceAll(/fuck/gi, 'cool');

        writeableStream.write(finalString);
    }); 
    */    //********** Method 2 */
    // readableStream.pipe(writeableStream)
    readableStream.pipe(tranformStream).pipe(writeableStream); // note:- always left side will be readable steam and right must be writeable 
    res.end('string transformation by stream');
});

app.listen(8000, () => {
    console.log('Running on Server:-', 8000);
});
