const jwt = require('jsonwebtoken')
const repository = require('../repository/repository')

async function doLogin(req, res, next) {
    const { email, password } = req.body
    try {
        const user = await repository.getUser(email, password)
        const token = jwt.sign(
            { userId: user._id, profileId: user.profileId },
            process.env.SECRET,
            { expiresIn: parseInt(process.env.EXPIRES) }
        )
        res.json({ token })
    } catch (error) {
        res.sendStatus(401)
    }
}

async function validateToken(req, res, next) {
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

async function doLogout(req, res, next) {
    const { userId } = res.locals
    res.send(`Logout userId ${userId}`)
}

module.exports = { doLogin, doLogout, validateToken }