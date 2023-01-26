const database = require('../config/database')
const bcrypt = require('bcryptjs')

async function getUser(email, password) {
    const db = await database.connect()
    const user = await db.collection('users').findOne({ email })
    if (!user) throw new Error('Wrong user and/or password')
    const isValid = bcrypt.compareSync(password, user.password)
    if (!isValid) throw new Error('Wrong user and/or password')

    return user
}

async function blackListToken(token) {
    const db = await database.connect()
    return db.collection('blacklisttoken').insertOne({ _id: token, createDate: new Date() })
}

async function checkBlackListToken(token) {
    const db = await database.connect()
    const qtd = await db.collection('blacklisttoken').countDocuments({ _id: token })
    return qtd > 0
}


module.exports = { getUser, blackListToken, checkBlackListToken }