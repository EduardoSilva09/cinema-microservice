const winston = require('winston')
const path = require('path')

const pathLog = path.join(__dirname, '..', 'logs', 'logs.log')
const pathLogInfo = path.join(__dirname, '..', 'logs', 'Info.log')

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [        
        new winston.transports.File({
            filename: pathLog,
            level: 'error'
        }),
        new winston.transports.File({
            filename: pathLogInfo,
            level: 'info'
        })
    ]
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({ format: winston.format.simple() }))
}

module.exports = logger