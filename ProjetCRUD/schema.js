const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, min: 0, max: 5 },
  date: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = { Book, User };
