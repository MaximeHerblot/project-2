const { Schema, model } = require("mongoose");

const publisherSchema = new Schema({
  name: String,
  creation_date: Date,
});

const Publisher = model("Publisher", publisherSchema);

exports.Publisher = Publisher;
