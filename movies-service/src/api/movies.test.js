const { test, expect, beforeAll, afterAll } = require('@jest/globals')
const server = require('../server/server')
const movies = require('./movies')
const request = require('supertest')
const repositoryMock = require('../repository/__mocks__/repository')

let app = null
beforeAll(async () => {
    app = await server.start(movies, repositoryMock)
})

afterAll(async () => {
    await server.stop()
})

test('GET /movies 200 Ok', async () => {
    const response = await request(app).get('/movies')
    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeTruthy()
})

test('GET /movies/:id 200 Ok', async () => {
    const testMovieId = '1';
    const response = await request(app).get(`/movies/${testMovieId}`)
    expect(response.status).toEqual(200)
    expect(response.body).toBeTruthy()
})

test('GET /movies/:id 404 NOT FOUND', async () => {
    const testMovieId = '-1';
    const response = await request(app).get(`/movies/${testMovieId}`)
    expect(response.status).toEqual(404)
})

test('GET /movies/premieres 200 Ok', async () => {
    const response = await request(app).get('/movies/premieres')
    expect(response.status).toEqual(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeTruthy()
})

test('POST /movies/ 201 CREATED', async () => {
    const movie = {
        titulo: 'Teste Movie',
        sinopse: 'Movie summary',
        duracao: 120, 
        dataLancamento: new Date(), 
        imagem: 'image.jpg', 
        categorias:['Aventura']
    }

    const response = await request(app)
        .post('/movies/')
        .set('Content-Type','application/json')
        .send(movie)

    expect(response.status).toEqual(201)
    expect(response.body).toBeTruthy()
})
