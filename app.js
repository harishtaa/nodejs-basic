// const fs = require('fs');

// const readableStream = fs.createReadStream('./articles.txt', {
//     highWaterMark: 10
// });

// readableStream.on('readable', () =>{
//     try {
//         process.stdout.write(`[${readableStream.read()}]`)
//     } catch (error) {

//     }
// })

// readableStream.on('enc', () => {
//     console.log('Done')
// })

const fs = require('fs');
const writeableStream = fs.createWriteStream('output.txt')

writeableStream.write('Ini merupakan teks baris pertama\n')
writeableStream.write('ini merupakan teks baris kedua\n')
writeableStream.end()