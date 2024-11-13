import User from '../../src/models/user.ts'
import mongoose from 'mongoose'

export const dummyUserData = {
    _id: new mongoose.Types.ObjectId(),
    username: 'dummy',
    password: 'dummy1234',
    email: 'dummy@openbird.com'
}

export const prepareDatabase = async () => {
    await User.deleteMany({})

    const dummyUser = new User(dummyUserData)
    await dummyUser.save()
}