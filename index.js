const fs = require('fs');
let files = fs.readdirSync('.');

console.log("grab all files...");
console.log(files);
console.log("push all files to api...");
console.log("push searchable file contents to api...");
