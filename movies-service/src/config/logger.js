const winston = require('winston')
const path = require('path')

const pathLog = path.join(__dirname, '..', 'logs', 'logs.txt') || 'logs.txt'
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [        
        new winston.transports.File({
            filename: pathLog,
            level: 'error'
        })
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({ format: winston.format.simple() }))
}

module.exports = logger