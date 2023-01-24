const express = require('express')
const httpProxy = require('express-http-proxy')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cookieParser())

const moviesServiceProxy = httpProxy(process.env.MOVIES_API)
const catalogServiceProxy = httpProxy(process.env.CATALOG_API)

app.use('/movies', moviesServiceProxy)
app.use(/cities|cinemas/i, catalogServiceProxy)

app.listen(process.env.PORT, () => {
    console.log(`API Gateway started at ${process.env.PORT}`);
})