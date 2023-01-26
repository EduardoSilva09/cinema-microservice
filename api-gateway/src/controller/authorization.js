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

async function validateBlackList(req, res, next) {
    let token = req.headers['authorization']
    if (!token) return next()

    token = token.replace('Bearer ', '')
    const isBlackListed = repository.checkBlackListToken(token)

    if (isBlackListed)
        return res.sendStatus(401)
    else
        next()
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
    let token = req.headers['authorization']
    token = token.replace('Bearer ', '')
    
    await repository.blackListToken(token)
    res.sendStatus(200)
}

module.exports = { doLogin, doLogout, validateToken, validateBlackList }