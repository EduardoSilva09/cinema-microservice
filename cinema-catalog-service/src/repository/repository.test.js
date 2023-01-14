const { test, expect, beforeAll } = require('@jest/globals')
const repository = require('./repository')

let cityId = null

beforeAll(async () => {
    const cities = await repository.getAllCities()
    cityId = cities[0]._id
})

test('getAllCities', async () => {
    const cities = await repository.getAllCities()
    expect(Array.isArray(cities)).toBeTruthy()
    expect(cities.length).toBeTruthy()
})

test('getCinemasByCiyId', async () => {
    const city = await repository.getCinemasByCiyId(cityId)
    expect(city).toBeTruthy()
    expect(Array.isArray(city.cinemas)).toBeTruthy()
})