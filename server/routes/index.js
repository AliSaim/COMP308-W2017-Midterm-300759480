//-- INTERNAL DOCUMENTATION -->
//-- File Name: index.js -->
//-- Student Name: Ali Saim -->
//-- Student ID: 300759480 -->
//-- Web App Name: My Favourite Books -->
//-- Date: Feb 25th 2017 -->

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
