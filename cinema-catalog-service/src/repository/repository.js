const database = require('../config/database')
const { ObjectId } = require('mongodb')

async function getAllCities() {
    const db = await database.connect()
    return db.collection('catalog')
        .find({})
        .project({ cidade: 1, uf: 1, pais: 1 })
        .toArray()
}

async function getCinemasByCiyId(cityId) {
    const objCotyId = new ObjectId(cityId)
    const db = await database.connect()
    return db.collection('catalog')
        .findOne({ _id: objCotyId }, { projection: { cinemas: 1 } })
}

module.exports = { getAllCities, getCinemasByCiyId } 