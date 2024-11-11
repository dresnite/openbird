import User from '../../src/models/user.ts'

export const prepareDatabase = async () => {
    await User.deleteMany({})
}