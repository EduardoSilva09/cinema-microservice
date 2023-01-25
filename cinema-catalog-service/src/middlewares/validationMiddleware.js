const jwt = require('jsonwebtoken')

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

module.exports = { validateToken }