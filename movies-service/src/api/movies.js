const { validateMovie, validateToken, validateAdmin } = require('../middlewares/validationMovie')
const logger = require('../config/logger')

module.exports = (app, repository) => {

    app.get('/movies/premieres', validateToken, async (req, res, next) => {
        const movies = await repository.getMoviesPremieres()
        res.json(movies)
    })

    app.get('/movies/:id', validateToken, async (req, res, next) => {
        const id = req.params.id
        const movie = await repository.getMovieById(id)
        if (!movie) return res.sendStatus(404)

        res.json(movie)
    })

    app.get('/movies', validateToken, async (req, res, next) => {
        const movies = await repository.getAllMovies()
        res.json(movies)
    })

    app.post('/movies', validateToken, validateAdmin, validateMovie, async (req, res, next) => {
        const { titulo, sinopse, imagem, categorias } = req.body
        const duracao = parseInt(req.body.duracao)
        const dataLancamento = new Date(req.body.dataLancamento)
        const result = await repository.addMovie({ titulo, sinopse, duracao, dataLancamento, imagem, categorias })

        logger.info(`User ${res.locals.userId} added the movie ${result._id} at ${new Date()}`)
        res.status(201).json(result)
    })

    app.delete('/movies/:id', validateToken, validateAdmin, async (req, res) => {
        const id = req.params.id
        const result = await repository.deleteMovie(id)

        logger.info(`User ${res.locals.userId} deletes the movie ${id} at ${new Date()}`)
        res.sendStatus(204)
    })

}