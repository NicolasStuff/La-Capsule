const mongoose = require('mongoose')

const langueSchema = mongoose.Schema({
    country: String,
    langue: String,
    token: String,
    salt: String, 
})

const langueModel = mongoose.model('langue', langueSchema)

module.exports = langueModel