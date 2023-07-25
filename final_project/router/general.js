const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  let username = req.body.username
  let password = req.body.password
  if (!username || !password){
  return res.status(500).json({message: "username or password not provided"});
  }
  let user = {
    username, password
  }
  users.push(user)
  return res.status(201).json(user);
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  return res.status(200).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn
  let book = books[isbn]
  if (book)
    return res.status(200).json(book);
  return res.status(404)
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  let author = req.params.author
  let filtered_books = []

  let books_authors = Object.entries(books)
  books_authors.forEach(([k, v]) => {
    console.log(k.toUpperCase(), author.toUpperCase())

    if (v.author.toUpperCase() == author.toUpperCase()) {
      console.log("tru")
      filtered_books.push(v)
    }
  })

  return res.status(200).json(filtered_books);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  let title = req.params.title
  let filtered_books = []

  let books_authors = Object.entries(books)
  books_authors.forEach(([k, v]) => {
    console.log(k.toUpperCase(), title.toUpperCase())

    if (v.title.toUpperCase() == title.toUpperCase()) {
      console.log("tru")
      filtered_books.push(v)
    }
  })

  return res.status(200).json(filtered_books);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  let isbn = req.params.isbn
  let book = books[isbn]
  if (book)
    return res.status(200).json(book.reviews);
  return res.status(404)
 });

module.exports.general = public_users;
