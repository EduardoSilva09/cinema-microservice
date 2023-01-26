const express = require('express')
const httpProxy = require('express-http-proxy')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const authController = require('../controller/authorization')

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cookieParser())
app.use(express.json())

const options = {
    proxyReqPathResolver: (req) => {
        return req.originalUrl
    }
}

const moviesServiceProxy = httpProxy(process.env.MOVIES_API, options)
const catalogServiceProxy = httpProxy(process.env.CATALOG_API, options)

app.post('/login', authController.doLogin)

app.use(authController.validateBlackList)
app.post('/logout', authController.validateToken, authController.doLogout)

app.use('/movies', moviesServiceProxy)
app.use('/cinemas', catalogServiceProxy)
app.use('/cities', catalogServiceProxy)

app.listen(process.env.PORT, () => {
    console.log(`API Gateway started at ${process.env.PORT}`);
})