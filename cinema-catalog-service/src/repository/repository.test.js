const { test, expect } = require('@jest/globals')
const repository = require('./repository')

test('getAllCities', async () => {
    const cities = await repository.getAllCities()
    console.log(cities);
    expect(Array.isArray(cities)).toBeTruthy()
    expect(cities.length).toBeTruthy()
})