const { test, expect, beforeAll } = require('@jest/globals')
const repository = require('./repository')

let testMovieId = null

beforeAll(async () => {
    const movies = await repository.getAllMovies()
    testMovieId = movies[0]._id
})

test('getAllMovies', async () => {
    const movies = await repository.getAllMovies()
    expect(Array.isArray(movies)).toBeTruthy()
    expect(movies.length).toBeTruthy()
})

test('getMovieById', async () => {
    const movie = await repository.getMovieById(testMovieId)
    expect(movie).toBeTruthy()
    expect(movie._id).toEqual(testMovieId)
})

test('getMoviesPremieres', async () => {
    const monthAgo = new Date()
    monthAgo.setMonth(-1)

    const movies = await repository.getMoviesPremieres()
    expect(Array.isArray(movies)).toBeTruthy()
    expect(movies.length).toBeTruthy()
    expect(movies[0].dataLancamento.getTime()).toBeGreaterThanOrEqual(monthAgo.getTime())
})

test('addMovie', async () => {

    const movie = {
        titulo: 'Teste Movie',
        sinopse: 'Movie summary',
        duracao: 120,
        dataLancamento: new Date(),
        imagem: 'image.jpg',
        categorias: ['Aventura']
    }

    let result;
    try {
        result = await repository.addMovie(movie)
        expect(result).toBeTruthy()
    } finally {
        if (result)
            await repository.deleteMovie(result._id)
    }
})
