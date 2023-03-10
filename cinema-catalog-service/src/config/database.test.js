const { test, expect } = require('@jest/globals')
const database = require('./database')

test('Connection Database', async () => {
    const connection = await database.connect()
    expect(connection).toBeTruthy()
})

test('Diconnection Database', async () => {
    const isDisconnected = await database.disconnect()
    expect(isDisconnected).toBeTruthy()
})

test('Diconnection Database 2x', async () => {
    await database.disconnect()
    const isDisconnected = await database.disconnect()
    expect(isDisconnected).toBeTruthy()
})