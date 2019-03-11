const mongoose = require('./connection.js')

const BookSchema = new mongoose.Schema({
  title: String,
  text: String,
  author: String
})

mongoose.model("Book", BookSchema)

module.exports = mongoose;