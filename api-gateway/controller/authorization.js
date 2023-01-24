const jwt = require('jsonwebtoken')

async function doLogin(req, res, next) {
    const { email, password } = req.body
    if (email === 'eduardo@email.com' && password === '123456') {
        const token = jwt.sign(
            { userId: 1 },
            process.env.SECRET,
            { expiresIn: process.env.EXPIRES }
        )
        res.json({ token })
    } else
        res.sendStatus(401)
}


async function validateToken(req, res, next) {
    const token = req.headers['authorization']
    if (!token)
        return res.sendStatus(401)

    token = token.replace('Bearer', '')

    try {
        const { userId } = jwt.verify(token, process.env.SECRET)
        res.locals.userId = userId
        next()
    } catch (error) {
        console.log(error)
        res.sendStatus(401)
    }
}

async function doLogout(req, res, next) {

}

module.exports = { doLogin, doLogout, validateToken }