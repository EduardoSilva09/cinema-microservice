const { test, expect, beforeAll, afterAll } = require('@jest/globals')
const app = require('../server/index')
const request = require('supertest')
const repository = require('../repository/repository')
const { ObjectId } = require('mongodb')

let token = ''
const tokenBlackList = new ObjectId().toHexString()
const login = {
    email: "eduardoadmin@email.com",
    password: "123456"
}

const wrongLogin = {
    email: "eduardoadmin@email.com",
    password: "ttt"
}

beforeAll(async () => {
    process.env.PORT = 4001
    const response = await request(app).post('/login').set('Content-Type', 'application/json')
        .send(login)
    token = response.body.token
    repository.blackListToken(tokenBlackList)
})

afterAll(async () => {
    await app.close()
})

test('POST /login 200 OK', async () => {
    const response = await request(app)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(login)

    expect(response.status).toEqual(200)
    expect(response.body.token).toBeTruthy()
})

test('POST /login 422 UNPROCESSABLE ENTITY', async () => {
    login.campoQueNaoTemNaDefinicaoDoLogin = new Date()

    const response = await request(app)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(login)

    expect(response.status).toEqual(422)
})

test('POST /login 401 UNAUTHORIZED', async () => {
    const response = await request(app)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(wrongLogin)

    expect(response.status).toEqual(401)
})

test('POST /logout 200 OK', async () => {
    const response = await request(app)
        .post('/logout')
        .set('Content-Type', 'application/json')
        .set('authorization', `Bearer ${token}`)

    expect(response.status).toEqual(200)
})

test('POST /logout 401 UNAUTHORIZED', async () => {
    const response = await request(app)
        .post('/logout')
        .set('Content-Type', 'application/json')
        .set('authorization', `Bearer ${token}wrong token`)

    expect(response.status).toEqual(401)
})

test('POST /logout 401 UNAUTHORIZED', async () => {
    const response = await request(app)
        .post('/logout')
        .set('Content-Type', 'application/json')
        .set('authorization', `Bearer ${token}wrong token`)

    expect(response.status).toEqual(401)
})

test('POST /logout 401 UNAUTHORIZED (BlackList)', async () => {
    const response = await request(app)
        .post('/logout')
        .set('Content-Type', 'application/json')
        .set('authorization', `Bearer ${tokenBlackList}`)

    expect(response.status).toEqual(401)
})