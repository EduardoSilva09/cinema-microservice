const { test, expect, beforeAll, afterAll } = require('@jest/globals')
const server = require('../server/server')
const catalog = require('./catalog')
const request = require('supertest')
const repositoryMock = require('../repository/__mocks__/repository')

const adminToken = '1'

jest.mock('../node_modules/jsonwebtoken', () => ({
    verify: (token) => {
        if (token === adminToken) return { userId: 1, profileId: 1 }
        else throw new Error('Invalid Token!')
    }
}))

let app = null
beforeAll(async () => {
    process.env.PORT = 3004
    app = await server.start(catalog, repositoryMock)
})

afterAll(async () => {
    await server.stop()
})

test('GET /cities 200 Ok', async () => {
    const response = await request(app)
        .get('/cities')
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeTruthy()
})

test('GET /cities 401 UNAUTHORIZED', async () => {
    const response = await request(app)
        .get('/cities')

    expect(response.status).toEqual(401)
})

test('GET /cities 401 UNAUTHORIZED (Invalid Token)', async () => {
    const response = await request(app)
        .get('/cities')
        .set('authorization', `Bearer InvalidToken`)

    expect(response.status).toEqual(401)
})

test('GET /cities/:city/movies 200 Ok', async () => {
    const testCityId = '1'
    const response = await request(app)
        .get(`/cities/${testCityId}/movies`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(200)
    expect(response.body).toBeTruthy()
})

test('GET /cities/:city/movies 401 UNAUTHORIZED', async () => {
    const testCityId = '1'
    const response = await request(app)
        .get(`/cities/${testCityId}/movies`)
        
    expect(response.status).toEqual(401)    
})

test('GET /cities/:city/movies 404 NOT FOUND', async () => {
    const testCityId = '-1'
    const response = await request(app)
        .get(`/cities/${testCityId}/movies`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(404)
})

test('GET /cities/:city/movies/:movie 200 Ok', async () => {
    const testCityId = '1'
    const testMovieId = '1'
    const response = await request(app)
        .get(`/cities/${testCityId}/movies/${testMovieId}`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeTruthy()
})

test('GET /cities/:city/movies/:movie 200 Ok', async () => {
    const testCityId = '1'
    const testMovieId = '1'
    const response = await request(app)
        .get(`/cities/${testCityId}/movies/${testMovieId}`)

    expect(response.status).toEqual(401)
})

test('GET /cities/:city/movies/:movie  404 NOT FOUND', async () => {
    const testCityId = '-1'
    const testMovieId = '1'
    const response = await request(app)
        .get(`/cities/${testCityId}/movies/${testMovieId}`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(404)
})

test('GET /cities/:city/cinemas 200 Ok', async () => {
    const testCityId = '1'
    const response = await request(app)
        .get(`/cities/${testCityId}/cinemas`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeTruthy()
})

test('GET /cities/:city/cinemas 401 UNAUTHORIZED', async () => {
    const testCityId = '1'
    const response = await request(app)
        .get(`/cities/${testCityId}/cinemas`)
        
    expect(response.status).toEqual(401)    
})

test('GET /cities/:city/cinemas  404 NOT FOUND', async () => {
    const testCityId = '-1'
    const response = await request(app)
        .get(`/cities/${testCityId}/cinemas`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(404)
})

test('GET /cinemas/:cinema/movies 200 Ok', async () => {
    const testCinemaId = '1'
    const response = await request(app)
        .get(`/cinemas/${testCinemaId}/movies`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeTruthy()
})

test('GET /cinemas/:cinema/movies 401 UNAUTHORIZED', async () => {
    const testCinemaId = '1'
    const response = await request(app)
        .get(`/cinemas/${testCinemaId}/movies`)
        
    expect(response.status).toEqual(401)    
})

test('GET /cinemas/:cinema/movies  404 NOT FOUND', async () => {
    const testCinemaId = '-1'
    const response = await request(app)
        .get(`/cinemas/${testCinemaId}/movies`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(404)
})

test('GET /cinemas/:cinema/movies/:movie 200 Ok', async () => {
    const testCinemaId = '1'
    const testMovieId = '1'
    const response = await request(app)
        .get(`/cinemas/${testCinemaId}/movies/${testMovieId}`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeTruthy()
})

test('GET /cinemas/:cinema/movies/:movie 401 UNAUTHORIZED', async () => {
    const testCinemaId = '1'
    const testMovieId = '1'
    const response = await request(app)
        .get(`/cinemas/${testCinemaId}/movies/${testMovieId}`)
        
    expect(response.status).toEqual(401)    
})

test('GET /cinemas/:cinema/movies/:movie  404 NOT FOUND', async () => {
    const testCinemaId = '-1'
    const testMovieId = '1'
    const response = await request(app)
        .get(`/cinemas/${testCinemaId}/movies/${testMovieId}`)
        .set('authorization', `Bearer ${adminToken}`)
    expect(response.status).toEqual(404)
})