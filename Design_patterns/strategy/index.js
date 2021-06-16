const Logger = require('./logger')
const config = require('./config.json')

let logger = new Logger(config.logs.strategy1)


logger.log('Hello my friend')
logger.log('How are you')
logger.log('my friend, That ll be ok')

logger.changeStrategy('toFile')

logger.log('Hello my friend')
logger.log('How are you')
logger.log('my friend, That ll be ok')


// And down use the morse method'
logger = new Logger(config.logs.strategy)

logger.log('Hello my friend')
logger.log('How are you')
logger.log('my friend, That ll be ok')

logger.changeStrategy('none')

logger.log('Hello my friend')
logger.log('How are you')
logger.log('my friend, That ll be ok')
