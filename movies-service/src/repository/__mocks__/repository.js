const movies = [{
    "_id": "63bc8ad72c04cb232b9aff95",
    "titulo": "Os vingadores: Guerra Infinita",
    "sinopse": "Os herois mais poderosos da Marvel enfrentando o Thanos",
    "duracao": 120,
    "dataLancamento": new Date('2023-01-16T00:00:00Z'),
    "imagem": "https://www.luiztools.com.br/vingadores-eu.jpg",
    "categorias": [
        "Aventura",
        "Ação"
    ]
}, {
    "_id": "63bc8ad72c04cb232b9aff96",
    "titulo": "Os Vingadores",
    "sinopse": "Os Heróis mais poderosos da Marvel enfrentando o Loki",
    "duracao": 100,
    "dataLancamento": new Date('2023-01-16T00:00:00Z'),
    "imagem": "https://www.luiztools.com.brvingadores.jpg",
    "categorias": [
        "Aventura",
        "Ação"
    ]
}]

async function getAllMovies() {
    return movies;
}

async function getMovieById(id) {
    if (id == -1) return null

    movies[0]._id = id
    return movies[0]
}

async function getMoviesPremieres() {
    movies[0].dataLancamento = new Date()
    return [movies[0]]
}

async function addMovie(movie) {
    return movies[0]
}

module.exports = { getAllMovies, getMovieById, getMoviesPremieres }