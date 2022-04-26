const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false,
        required: true
    }
})

module.exports = mongoose.model("Task", taskSchema)