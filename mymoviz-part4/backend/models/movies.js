var mongoose = require('./connection')

var movieSchema = mongoose.Schema({
    name: String,
    image: String,
})

var movieModel = mongoose.model('users', movieSchema)

module.exports = movieModel;