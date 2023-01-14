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
                _id: ObjectId(),
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
                                data: new Date('2023-01-01T13:00:00Z'),
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
                                data: new Date('2023-01-01T13:00:00Z'),
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
            },
            {
                _id: ObjectId(),
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