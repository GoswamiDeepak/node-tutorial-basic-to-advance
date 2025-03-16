const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    /*
    //bad way-----------
    const file = fs.readFileSync('video.mp4');
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    return res.end(file);
    
   // Good Way ---------
    const readAbleStream = fs.createReadStream('video.mp4');
    res.writeHead(200, { 'Content-Type': 'video/mp4' });
    readAbleStream.pipe(res);
    */
    /*
   //*********Copy big file into another file*******
   //bad way--------
   const file = fs.readFileSync("demo.txt");
   fs.writeFileSync("output.txt",file)
   */
    //Good Way ---------
    const readStream = fs.createReadStream('demo.txt');
    const writeStream = fs.createWriteStream('output.txt');

    readStream.on('data', (chunk) => {
        console.log(chunk); //binary form
        //console.log(chunk.toString()); //string form
        writeStream.write(chunk);
    });
    res.end()
});

server.listen(4000, () => {
    console.log('Listening on 4000');
});
