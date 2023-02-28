const fs = require('fs');
const path = require('path')
const link = path.resolve('./stream', 'input.txt');

const readableStream = fs.createReadStream(link, {
    highWaterMark: 15
})

const writeableStream = fs.createWriteStream('./stream/output.txt')

readableStream.on('readable', () => {
    try {
        writeableStream.write(`${readableStream.read()}\n`)
    } catch (error){

    }
})