const path = require('path')
const { appendFile } = require('fs')

class LogStrategy {

    static noDate(timestamp, message) {
        console.log(message)
    }

    static toFile(timestamp, message) {
        const fileName = path.join(__dirname, 'logs.txt')
        appendFile(fileName, `${timestamp} - ${message} \n`, error => {
            if (error) {
                console.log('Error writing to file')
                console.error(error)
            }
        })
    }

    static toConsole(timestamp, message) {
        console.log(`${timestamp} - ${message}`)
    }

    static none() {

    }

    static toMorseCode(timestamp, message) {
        // to this you need instal  that  npm i morse
        const morse = require('morse')
        const morseCode = morse.encode(message)
        console.log(morseCode)
    }
}



module.exports = LogStrategy