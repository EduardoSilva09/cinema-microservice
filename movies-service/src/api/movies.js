const validationMiddleware = require('../middlewares/validationMovie')

module.exports = (app, repository) => {

    app.get('/movies/premieres', async (req, res, next) => {
        const movies = await repository.getMoviesPremieres()
        res.json(movies)
    })

    app.get('/movies/:id', async (req, res, next) => {
        const id = req.params.id
        const movie = await repository.getMovieById(id)
        if (!movie) return res.sendStatus(404)

        res.json(movie)
    })

    app.get('/movies', async (req, res, next) => {
        const movies = await repository.getAllMovies()
        res.json(movies)
    })

    app.post('/movies',validationMiddleware.validateMovie, async (req, res, next) => {
        const { titulo, sinopse, imagem, categorias } = req.body
        const duracao = parseInt(req.body.duracao)
        const dataLancamento = new Date(req.body.dataLancamento)
        const result = await repository.addMovie({ titulo, sinopse, duracao, dataLancamento, imagem, categorias })
        res.status(201).json(result)
    })

    app.delete('/movies/:id', async (req, res) => {
        const id = req.params.id
        const result = await repository.deleteMovie(id)
        res.sendStatus(204)
    })

}