module.exports = (app, repository) => {

    app.get('/cinemas/:cinema/movies/:movie', async (req, res, next) => {
        const movieId = req.params.movie
        const cinemaId = req.params.cinema
        const movieSession = await repository.getMovieSessionByCinemaId(movieId, cinemaId)
        if (!movieSession) return res.sendStatus(404)

        res.json(movieSession)
    })

    app.get('/cinemas/:cinema/movies', async (req, res, next) => {
        const cinemaId = req.params.cinema
        const movies = await repository.getMoviesByCinemaId(cinemaId)
        if (!movies) return res.sendStatus(404)

        res.json(movies)
    })

    app.get('/cities/:city/cinemas', async (req, res, next) => {
        const cityId = req.params.city
        const cinemas = await repository.getCinemasByCityId(cityId)
        if (!cinemas) return res.sendStatus(404)

        res.json(cinemas)
    })

    app.get('/cities/:city/movies/:movie', async (req, res, next) => {
        const cityId = req.params.city
        const movieId = req.params.movie
        const movieSession = await repository.getMovieSessionByCityId(movieId, cityId)
        if (!movieSession) return res.sendStatus(404)

        res.json(movieSession)
    })

    app.get('/cities/:city/movies', async (req, res, next) => {
        const cityId = req.params.city
        const movies = await repository.getMoviesByCityId(cityId)
        if (!movies) return res.sendStatus(404)

        res.json(movies)
    })

    app.get('/cities', async (req, res, next) => {
        const cities = await repository.getAllCities()
        res.json(cities)
    })

}