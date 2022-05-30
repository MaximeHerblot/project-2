const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  description: String,
  publication_date: Date,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
  publisher: {
    type: Schema.Types.ObjectId,
    ref: "Publisher",
  },
});

const Book = model("Book", bookSchema);

exports.Book = Book;
