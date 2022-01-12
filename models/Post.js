// models/User.js

import mongoose from 'mongoose'

const AddPostSchema = new mongoose.Schema({
    post: String,
    userId: mongoose.Types.ObjectId,
})
module.exports = mongoose.models.AddPost || mongoose.model('AddPost', AddPostSchema)