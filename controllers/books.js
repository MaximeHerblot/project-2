let { Book } = require("../model/book");
let { Author } = require("../model/author");
let { Publisher } = require("../model/publisher");

exports.getAll = async (req, res) => {
  try {
    let books = await Book.find({}).populate("author").populate("publisher");
    res.status("200").json({ books: books });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.getOne = async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);
    res.status("200").json({ book: book });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.create = async (req, res) => {
  let params = req.body;
  try {
    let book = await Book.create(params);
    res.status("200").json({ book: book });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.edit = async (req, res) => {
  let params = req.body;
  try {
    Book.findOne(
      {
        _id: req.body.id,
      },
      async function (err, book) {
        for (const [key, value] of Object.entries(params)) {
          if (typeof book[key] !== "undefined") {
            if (key == "author") {
              book[key] = await Author.findById(value);
            } else if (key == "publisher") {
              book[key] = await Publisher.findById(value);
            } else {
              book[key] = value;
            }
          }
        }

        book.save(function (err) {
          if (err) {
            res.status("400").send(e);
          }
        });
        res.status("200").json({ book: book });
      }
    );
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.delete = async (req, res) => {
  try {
    let book = await Book.findByIdAndRemove(req.body.id);
    res.status("200").json({ book: book });
  } catch (e) {
    res.status("400").send(e);
  }
};
