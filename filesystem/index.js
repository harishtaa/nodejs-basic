const fs = require('fs')
const path = require('path')
const link = path.resolve('./filesystem', 'notes.txt');


const data = fs.readFileSync(link, 'UTF-8')
console.log(data)