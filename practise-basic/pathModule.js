const path = require('path');

console.log(path.resolve('demo.txt')) //******* C:\Users\Deepak Goswami\Desktop\Daily work\node-GOD\demo.txt

console.log(path.join('public','file.txt')) //******** public\file.txt

console.log(path.basename('/public/file.txt'))//***** file.txt

console.log(path.dirname('/public/file.txt')) //****** /public

console.log(path.extname('file.txt')) //****** .txt

//console.log(process.cwd()) //******* C:\Users\Deepak Goswami\Desktop\Daily work\node-GOD 

//console.log(__dirname) //********* C:\Users\Deepak Goswami\Desktop\Daily work\node-GOD

//console.log(__filename) //******** C:\Users\Deepak Goswami\Desktop\Daily work\node-GOD\pathModule.js 

console.log('Current Working Directory:', process.cwd());
console.log('File Directory:', __dirname);