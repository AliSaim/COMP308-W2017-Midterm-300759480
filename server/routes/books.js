//-- INTERNAL DOCUMENTATION -->
//-- File Name: books.js -->
//-- Student Name: Ali Saim -->
//-- Student ID: 300759480 -->
//-- Web App Name: My Favourite Books -->
//-- Date: Feb 25th 2017 -->

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
    res.render('books/details', {
    title: "Add a new Book",
    games: ''
  });

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
    let newBook = book({
      "title": req.body.Title,
      "description": reg.body.Description,
      "price": req.body.Price,
      "author": reg.body.Author,
      "rating": req.body.Rating,
      "genre": reg.body.Genre
    });

    book.create(newBook, (err, book) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        res.redirect('/books');
      }
    });
});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

try {
      // get a reference to the id from the url
      let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // find one game by its id
      book.findById(id, (err, books) => {
        if(err) {
          console.log(err);
          res.end(error);
        } else {
          // show the game details view
          res.render('books/details', {
              title: 'Books Details',
              books: books
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.redirect('/errors/404');
    }


});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {
    let id = req.params.id;

     let updatedBook = book({
       "_id": id,
      "title": req.body.Title,
      "description": reg.body.Description,
      "price": req.body.Price,
      "author": reg.body.Author,
      "rating": req.body.Rating,
      "genre": reg.body.Genre
    });

    book.update({_id: id}, updatedBook, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh the game List
        res.redirect('/books');
      }
    });

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
     let id = req.params.id;

    book.remove({_id: id}, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh the games list
        res.redirect('/books');
      }
    });
});


module.exports = router;
