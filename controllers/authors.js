let { Author } = require("../model/author");

exports.getAll = async (req, res) => {
  try {
    let authors = await Author.find({});
    res.status("200").json({ authors: authors });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.getOne = async (req, res) => {
  try {
    let author = await Author.findById(req.params.id);
    res.status("200").json({ author: author });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.create = async (req, res) => {
  let params = req.body;
  try {
    let author = await Author.create(params);
    res.status("200").json({ author: author });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.edit = async (req, res) => {
  let params = req.body;
  try {
    let author = Author.findOne(
      {
        _id: req.body.id,
      },
      function (err, author) {
        console.log(err);
        for (const [key, value] of Object.entries(params)) {
          if (typeof author[key] !== "undefined") {
            author[key] = value;
          }
        }

        author.save(function (err) {
          if (err) {
            res.status("400").send(e);
          }
        });
        res.status("200").json({ author: author });
      }
    );
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.delete = async (req, res) => {
  try {
    let author = await Author.findByIdAndRemove(req.body.id);
    res.status("200").json({ author: author });
  } catch (e) {
    res.status("400").send(e);
  }
};
