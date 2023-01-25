const scheema = require('../scheemas/movie')
const jwt = require('jsonwebtoken')

function validateMovie(req, res, next) {
    const { error } = scheema.validate(req.body)
    if (error) {
        const { details } = error
        return res.status(422).json(details.map(d => d.message))
    }
    next()
}

function validateToken(req, res, next) {
    let token = req.headers['authorization']
    if (!token)
        return res.sendStatus(401)

    token = token.replace('Bearer ', '')

    try {
        const { userId } = jwt.verify(token, process.env.SECRET)
        res.locals.userId = userId
        next()
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}

module.exports = { validateMovie, validateToken }