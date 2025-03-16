process.env.UV_THREADPOOL_SIZE = 12;

const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();
// fs.readFile("demo.txt","utf-8", (err, data)=>{
//     if(err) throw new Error(err);
//     console.log(`${start - Date.now()}ms: file readed -> ${data}`)
// })

crypto.pbkdf2('password1', 'salt1', 100000, 64, 'sha512', () => {
    console.log(`${Date.now() - start}ms:password1`);
});

crypto.pbkdf2('password2', 'salt2', 100000, 64, 'sha512', () => {
    console.log(`${Date.now() - start}ms: password2`);
});

crypto.pbkdf2('password3', 'salt3', 100000, 64, 'sha512', () => {
    console.log(`${Date.now() - start}ms: password3`);
});

crypto.pbkdf2('password4', 'salt4', 100000, 64, 'sha512', () => {
    console.log(`${Date.now() - start}ms: password4`);
});

crypto.pbkdf2('password5', 'salt5', 100000, 64, 'sha512', () => {
    console.log(`${Date.now() - start}ms: password5`);
});

crypto.pbkdf2('password6', 'salt6', 100000, 64, 'sha512', () => {
    console.log(`${Date.now() - start}ms: password6`);
});

crypto.pbkdf2('password7', 'salt7', 100000, 64, 'sha512', () => {
    console.log(`${Date.now() - start}ms: password7`);
});
