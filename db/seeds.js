const mongoose = require('./book.js')
const Book = mongoose.model('Book')
const bookData = require('./book-data.json')

Book.remove({})
  .then(() => {
    Book.collection.insert(bookData)
      .then((books) => {
        console.log(books)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })