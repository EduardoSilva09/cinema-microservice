const { ObjectId } = require('mongodb')

const catalog = [
    {
        cidade: "Gravataí",
        uf: "RS",
        cinemas: []
    },
    {
        cidade: "Porto Alegre",
        uf: "RS",
        pais: "BR",
        cinemas: [
            {
                _id: new ObjectId('63c5e85e584c304dc90db5f3'),
                nome: "Cinemark Bourbon Ipiranga",
                salas: [
                    {
                        nome: 1,
                        sessoes: [
                            {
                                data: new Date('2023-01-01T09:00:00Z'),
                                idFilme: ObjectId('63bc8ad72c04cb232b9aff95'),
                                filme: 'Os Vingadores: Guerra Infinita',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: false
                                    }
                                ]
                            },
                            {
                                data: new Date('2023-01-01T11:00:00Z'),
                                idFilme: new ObjectId('63bc8ad72c04cb232b9aff95'),
                                filme: 'Os Vingadores: Guerra Infinita',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: true
                                    }
                                ]
                            },
                            {
                                data: new Date('2023-01-01T13:00:00Z'),
                                idFilme: new ObjectId('63bc8ad72c04cb232b9aff96'),
                                filme: 'Os Vingadores: Era de Ultron',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        nome: 2,
                        sessoes: [
                            {
                                data: new Date('2023-01-01T09:00:00Z'),
                                idFilme: new ObjectId('63bc8ad72c04cb232b9aff95'),
                                filme: 'Os Vingadores: Guerra Infinita',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: false
                                    }
                                ]
                            },
                            {
                                data: new Date('2023-01-01T11:00:00Z'),
                                idFilme: new ObjectId('63bc8ad72c04cb232b9aff95'),
                                filme: 'Os Vingadores: Guerra Infinita',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: true
                                    }
                                ]
                            },
                            {
                                data: new Date('2023-01-01T13:00:00Z'),
                                idFilme: new ObjectId('63bc8ad72c04cb232b9aff96'),
                                filme: 'Os Vingadores: Era de Ultron',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                _id: ObjectId('63c5e87b584c304dc90db5f4'),
                nome: "GNC Lindóia",
                salas: [
                    {
                        nome: 1,
                        sessoes: [
                            {
                                data: new Date('2023-02-01T09:00:00Z'),
                                idFilme: ObjectId('63bc8ad72c04cb232b9aff95'),
                                filme: 'Os Vingadores: Guerra Infinita',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: false
                                    }
                                ]
                            },
                            {
                                data: new Date('2023-02-01T11:00:00Z'),
                                idFilme: ObjectId('63bc8ad72c04cb232b9aff95'),
                                filme: 'Os Vingadores: Guerra Infinita',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: true
                                    }
                                ]
                            },
                            {
                                data: new Date('2023-02-01T13:00:00Z'),
                                idFilme: ObjectId('63bc8ad72c04cb232b9aff96'),
                                filme: 'Os Vingadores: Era de Ultron',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: true
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        nome: 2,
                        sessoes: [
                            {
                                data: new Date('2023-02-01T09:00:00Z'),
                                idFilme: ObjectId('63bc8ad72c04cb232b9aff95'),
                                filme: 'Os Vingadores: Guerra Infinita',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: false
                                    }
                                ]
                            },
                            {
                                data: new Date('2023-02-01T11:00:00Z'),
                                idFilme: ObjectId('63bc8ad72c04cb232b9aff95'),
                                filme: 'Os Vingadores: Guerra Infinita',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: true
                                    }
                                ]
                            },
                            {
                                data: new Date('2023-02-01T13:00:00Z'),
                                idFilme: ObjectId('63bc8ad72c04cb232b9aff96'),
                                filme: 'Os Vingadores: Era de Ultron',
                                valor: 25.00,
                                assentos: [
                                    {
                                        numero: 1,
                                        disponivel: true
                                    },
                                    {
                                        numero: 1,
                                        disponivel: true
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
]

function getAllCities() {
    return catalog.map(item => {
        return {
            _id: ObjectId(),
            pais: item.pais,
            uf: item.uf,
            cidade: item.cidade
        }
    })
}

function getCinemasByCityId(cityId) {
    if (cityId < 0) return null
    const lastInsert = catalog.length - 1
    const cinemas = catalog[lastInsert].cinemas
    return cinemas
}

function getMoviesByCinemaId(cinemaId) {
    if (cinemaId < 0) return null
    const lastInsert = catalog.length - 1
    const cinemas = catalog[lastInsert].cinemas    
    return cinemas.map(cinema => {
        return {
            titulo: cinema.salas[0].sessoes[0].filme,
            _id: cinema.salas[0].sessoes[0].idFilme
        }
    })
}

function getMoviesByCityId(cityId) {
    return getMoviesByCinemaId(cityId)
}

function getMovieSessionByCityId(movieId, cityId) {
    if (cityId < 0 || movieId < 0) return null
    const lastInsert = catalog.length - 1
    const cinemas = catalog[lastInsert].cinemas
    return cinemas.map(cinema => {
        return {
            titulo: cinema.salas[0].sessoes[0].filme,
            _id: cinema.salas[0].sessoes[0].idFilme,
            cinema: cinema.nome,
            idCinema: cinema._id,
            sala: cinema.salas[0].nome,
            sessao: cinema.salas[0].sessoes[0]
        }
    })

}

function getMovieSessionByCinemaId(movieId, cinemaId) {
    return getMovieSessionByCityId(movieId, cinemaId)
}

module.exports = {
    getAllCities,
    getCinemasByCityId,
    getMoviesByCinemaId,
    getMoviesByCityId,
    getMovieSessionByCityId,
    getMovieSessionByCinemaId
} 