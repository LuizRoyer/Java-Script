
const path = require('path')
const FsProxy= require('./fs.proxy')

var fs= new FsProxy(require('fs'))

let mdFile = path.join(__dirname, 'Readme.md')

const result = (error, content) => {

    if (error) {
        console.log('\x07')
        console.error(error)
        process.exit(0)
    }

    console.log('reading file ')
    console.log(content)
}

fs.readFile(mdFile, 'UTF-8', result)