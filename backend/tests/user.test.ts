import test, { beforeEach } from 'node:test'
import request from 'supertest'
import { prepareDatabase } from './fixtures/prepare-database.ts'
import app from '../src/app.ts'

beforeEach(prepareDatabase)

test('Should register an user', () => {
    request(app)
        .post('/users')
        .send({
            username: 'dummy',
            password: 'dummy1234',
            email: 'dummy@openbird.com'
        })
        .expect(201)
})

test('Should fail to register an user with the same username or email', () => {
    request(app)
        .post('/users')
        .send({
            username: 'dummy',
            password: 'dummy1234',
            email: 'dummy@openbird.com'
        })
        .expect(201)

    request(app)
        .post('/users')
        .send({
            username: 'dummy',
            password: 'dummy1234',
            email: 'ok@openbird.com'
        })
        .expect(500)

        request(app)
        .post('/users')
        .send({
            username: 'anotherdummy',
            password: 'dummy1234',
            email: 'dummy@openbird.com'
        })
        .expect(500)
})

test('Should fail to register an user because email is not valid', () => {
    request(app)
        .post('/users')
        .send({
            username: 'dummy',
            password: 'dummy1234',
            email: 'dummy.com'
        })
        .expect(201)
})