const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
});

const Author = model("Author", authorSchema);

exports.Author = Author;
