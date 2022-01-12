// models/User.js

import mongoose from 'mongoose'

const AddUserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    date: String,
    username: String,
    password: String,
    img:String
})

module.exports = mongoose.models.AddUser || mongoose.model('AddUser', AddUserSchema)