const { test, expect, beforeAll } = require('@jest/globals')
const repository = require('./repository')

let cityId = null
let cinemaId = null
let movieId = null

beforeAll(async () => {
    const cities = await repository.getAllCities()
    const lastCity = cities.length - 1
    cityId = cities[lastCity]._id

    const cinemas = await repository.getCinemasByCiyId(cityId)
    cinemaId = cinemas[lastCity]._id
    movieId = cinemas[lastCity].salas[0].sessoes[0].idFilme
})

test('getAllCities', async () => {
    const cities = await repository.getAllCities()
    expect(Array.isArray(cities)).toBeTruthy()
    expect(cities.length).toBeTruthy()
})

test('getCinemasByCityId', async () => {
    const cinemas = await repository.getCinemasByCityId(cityId)
    expect(cinemas).toBeTruthy()
    expect(Array.isArray(cinemas)).toBeTruthy()
})

test('getMoviesByCinemaId', async () => {
    const movies = await repository.getMoviesByCinemaId(cinemaId)
    expect(movies.length).toBeTruthy()
    expect(Array.isArray(movies)).toBeTruthy()
})

test('getMoviesByCityId', async () => {
    const movies = await repository.getMoviesByCityId(cityId)
    expect(Array.isArray(movies)).toBeTruthy()
    expect(movies.length).toBeTruthy()
})

test('getMovieSessionByCityId', async () => {
    const movieSession = await repository.getMovieSessionByCityId(movieId, cityId)
    expect(Array.isArray(movieSession)).toBeTruthy()
    expect(movieSession.length).toBeTruthy()
})

test('getMovieSessionByCinemaId', async () => {
    const movieSession = await repository.getMovieSessionByCinemaId(movieId, cinemaId)
    expect(Array.isArray(movieSession)).toBeTruthy()
    expect(movieSession.length).toBeTruthy()
})