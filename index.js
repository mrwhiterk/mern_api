const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db/book.js');
const Book = mongoose.model('Book');

const app = express();

app.set('port', process.env.PORT || 3001);
app.use(parser.json());
app.use(cors());

app.get('/api/books', (req, res) => {
  Book.find()
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/api/books', (req, res) => {
  Book.create(req.body)
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/api/books/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    });
});

app.put('/api/books/:id', (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  })
    .then(book => {
      res.json(book);
      res.redirect('/api/books/')
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete('/api/books/:id', (req, res) => {
  Book.findOneAndRemove({ _id: req.params.id })
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      console.log(err);
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'));
})