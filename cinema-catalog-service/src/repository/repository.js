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
    const objCityId = new ObjectId(cityId)
    const db = await database.connect()
    const city = await db.collection('catalog')
        .findOne(
            {
                _id: objCityId
            },
            {
                projection: {
                    cinemas: 1
                }
            }
        )
    return city.cinemas
}

async function getMoviesByCinemaId(cinemaId) {
    const objCinemaId = new ObjectId(cinemaId)
    const db = await database.connect()
    const group = await db.collection('catalog')
        .aggregate([
            { $match: { "cinemas._id": objCinemaId } },
            { $unwind: "$cinemas" },
            { $unwind: "$cinemas.salas" },
            { $unwind: "$cinemas.salas.sessoes" },
            {
                $group: {
                    _id: {
                        titulo: "$cinemas.salas.sessoes.filme",
                        _id: "$cinemas.salas.sessoes.idFilme"
                    }
                }
            }
        ])
        .toArray()
    return group.map(g => g._id)
}

async function getMoviesByCityId(cityId) {
    const objCityId = new ObjectId(cityId)
    const db = await database.connect()
    const group = await db.collection('catalog')
        .aggregate([
            { $match: { "_id": objCityId } },
            { $unwind: "$cinemas" },
            { $unwind: "$cinemas.salas" },
            { $unwind: "$cinemas.salas.sessoes" },
            {
                $group: {
                    _id: {
                        titulo: "$cinemas.salas.sessoes.filme",
                        _id: "$cinemas.salas.sessoes.idFilme"
                    }
                }
            }
        ])
        .toArray()
    return group.map(g => g._id)
}

async function getMovieSessionByCityId(movieId, cityId) {
    const objCityId = new ObjectId(cityId)
    const objMovieId = new ObjectId(movieId)
    const db = await database.connect()
    const group = await db.collection('catalog')
        .aggregate([
            { $match: { "_id": objCityId } },
            { $unwind: "$cinemas" },
            { $unwind: "$cinemas.salas" },
            { $unwind: "$cinemas.salas.sessoes" },
            {
                $match: { "cinemas.salas.sessoes.idFilme": objMovieId }
            },
            {
                $group: {
                    _id: {
                        titulo: "$cinemas.salas.sessoes.filme",
                        _id: "$cinemas.salas.sessoes.idFilme",
                        cinema: "$cinemas.nome",
                        idCinema: "$cinemas._id",
                        sala: "$cinemas.salas.nome",
                        sessao: "$cinemas.salas.sessoes"
                    }
                }
            }
        ])
        .toArray()
    return group.map(g => g._id)

}

async function getMovieSessionByCinemaId(movieId, cinemaId) {
    const objCinemaId = new ObjectId(cinemaId)
    const objMovieId = new ObjectId(movieId)
    const db = await database.connect()
    const group = await db.collection('catalog')
        .aggregate([
            { $match: { "cinemas._id": objCinemaId } },
            { $unwind: "$cinemas" },
            { $unwind: "$cinemas.salas" },
            { $unwind: "$cinemas.salas.sessoes" },
            {
                $match: { "cinemas.salas.sessoes.idFilme": objMovieId }
            },
            {
                $group: {
                    _id: {
                        titulo: "$cinemas.salas.sessoes.filme",
                        _id: "$cinemas.salas.sessoes.idFilme",
                        cinema: "$cinemas.nome",
                        idCinema: "$cinemas._id",
                        sala: "$cinemas.salas.nome",
                        sessao: "$cinemas.salas.sessoes"
                    }
                }
            }
        ])
        .toArray()
    return group.map(g => g._id)
}

module.exports = {
    getAllCities,
    getCinemasByCiyId,
    getMoviesByCinemaId,
    getMoviesByCityId,
    getMovieSessionByCityId,
    getMovieSessionByCinemaId
} 