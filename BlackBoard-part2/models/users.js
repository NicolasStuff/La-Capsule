var mongoose = require('mongoose');

var messagesSchema = mongoose.Schema({
    title: String,
    content: String,
    dateExp: Date,
    read: Boolean,
    sender: String,
})

var tasksSchema  = mongoose.Schema({
    name: String,
    category: String,
    owner: String,
    dateInsert: Date,
    dateDue: Date,
    dateCloture: Date,
})

var UsersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    status: String,
    gender: String,
    dateInsert: Date,
    tasks: [
        tasksSchema 
    ],
    messages: [
        messagesSchema
    ],
})

module.exports = mongoose.model('users', UsersSchema)