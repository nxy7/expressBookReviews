const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
  let user = {
    username, password
  }
  return users.includes(user)
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  let username = req.body.username
  let password = req.body.password
  if (!username || !password){
    return res.status(500).json({message: "username or password not provided"});
  }
  
  return res.status(404).json({message: "No such user"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
