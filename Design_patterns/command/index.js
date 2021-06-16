const Conductor = require('./conductor')
const { ExitCommand, CreateCommand } = require('./commands')

const { createInterface } = require('readline')

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('create<fileName>  <text> | history| undo| redo|  exit')
rl.prompt()

rl.on('line', input => {
    let [commandText, ...remaining] = input.split(' ')
    let [fileName, ...fileText] = remaining
    let text = fileText.join(' ')

    switch (commandText) {

        case 'history':
            Conductor.printHistory()
            break;

        case 'undo':
            Conductor.undo()
            break

        case 'redo':
            Conductor.redo()
            break

        case 'exit':
            // console.log('TODO :Exit')
            Conductor.run(new ExitCommand())
            break;

        case 'create':
            // console.log(`TODO: Create File ${fileName}`)
            // console.log('file contents', text)
            Conductor.run(new CreateCommand(fileName, text))
            break
            
        default:
            console.log(`${commandText} command not foud`)
    }
    rl.prompt()
})