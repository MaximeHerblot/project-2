let { Publisher } = require("../model/publisher");

exports.getAll = async (req, res) => {
  try {
    let publishers = await Publisher.find({});
    res.status("200").json({ publishers: publishers });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.getOne = async (req, res) => {
  try {
    let publisher = await Publisher.findById(req.params.id);
    res.status("200").json({ publisher: publisher });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.create = async (req, res) => {
  let params = req.body;
  try {
    let publisher = await Publisher.create(params);
    res.status("200").json({ publisher: publisher });
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.edit = async (req, res) => {
  let params = req.body;
  try {
    Publisher.findOne(
      {
        _id: req.body.id,
      },
      function (err, publisher) {
        if (err) res.status("400").send(err);
        if (publisher == null) {
          res.status("400").send({ publisher: null });
        }
        for (const [key, value] of Object.entries(params)) {
          if (typeof publisher[key] !== "undefined") {
            publisher[key] = value;
          }
        }

        publisher.save(function (err) {
          if (err) {
            res.status("400").send(err);
          }
        });
        res.status("200").json({ publisher: publisher });
      }
    );
  } catch (e) {
    res.status("400").send(e);
  }
};

exports.delete = async (req, res) => {
  try {
    let publisher = await Publisher.findByIdAndRemove(req.body.id);
    res.status("200").json({ publisher: publisher });
  } catch (e) {
    res.status("400").send(e);
  }
};
