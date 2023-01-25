const jwt = require('jsonwebtoken')

async function doLogin(req, res, next) { 
    const { email, password } = req.body
    if (email === 'eduardo@email.com' && password === '123456') { //ADMIN
        const token = jwt.sign(
            { userId: 1, profileId: 1 },
            process.env.SECRET,
            { expiresIn: parseInt(process.env.EXPIRES) }
        )
        res.json({ token })
    } else if (email === 'eduardo1@email.com' && password === '123456') {// VISIT
        const token = jwt.sign(
            { userId: 1, profileId: 2 },
            process.env.SECRET,
            { expiresIn: parseInt(process.env.EXPIRES) }
        )
        res.json({ token })
    } else
        res.sendStatus(401)
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