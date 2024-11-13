import test, { beforeEach } from 'node:test'
import request from 'supertest'
import mongoose from 'mongoose'
import { dummyUserData, prepareDatabase } from './fixtures/prepare-database.ts'
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

test('Should retrieve dummy user', () => {
    request(app)
        .get('/users/' + dummyUserData._id)
        .send()
        .expect(200)
})

test('Should fail to retrieve user data', () => {
    const fakeUserId = new mongoose.Types.ObjectId()
    request(app)
        .get('/users/' + fakeUserId)
        .send()
        .expect(404)
})