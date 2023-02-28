const fs = require('fs');

const fileReadCallback = (error, data) => {
    if (error)  {
        console.log('Gagal membaca berkas')
        return;
    }
    console.log(data)

};

// //async
// fs.readFile('todo.txt', 'utf-8', fileReadCallback)



//sync
const data = fs.readFileSync('todo.txt','UTF-8')
console.log(data)