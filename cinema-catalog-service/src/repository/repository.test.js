const { test, expect, beforeAll } = require('@jest/globals')
const repository = require('./repository')

let cityId = null
let cinemaId = null

beforeAll(async () => {
    const cities = await repository.getAllCities()
    cityId = cities[cities.length - 1]._id

    const cinemas = await repository.getCinemasByCiyId(cityId)
    cinemaId = cinemas[cities.length - 1]._id
})

test('getAllCities', async () => {
    const cities = await repository.getAllCities()
    expect(Array.isArray(cities)).toBeTruthy()
    expect(cities.length).toBeTruthy()
})

test('getCinemasByCiyId', async () => {
    const cinemas = await repository.getCinemasByCiyId(cityId)
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