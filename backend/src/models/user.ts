import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcrypt'

type User = {
    username: string
    password: string
    email: string
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate: (username: string) => {
            return validator.isAlphanumeric(username)
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        validate: (email: string) => {
            return validator.isEmail(email)
        }
    }
})

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

export const User = mongoose.model('User', userSchema)

