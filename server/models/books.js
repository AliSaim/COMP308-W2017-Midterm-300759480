//-- INTERNAL DOCUMENTATION -->
//-- File Name: books.js -->
//-- Student Name: Ali Saim -->
//-- Student ID: 300759480 -->
//-- Web App Name: My Favourite Books -->
//-- Date: Feb 25th 2017 -->

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
