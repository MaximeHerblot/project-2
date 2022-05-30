var express = require("express");
var router = express.Router();
let book = require("../controllers/books");

/* GET users listing. */
router.get("/", function (req, res, next) {
  book.getAll(req, res);
});

router.get("/:id", function (req, res, next) {
  book.getOne(req, res);
});

router.post("/", function (req, res, next) {
  book.create(req, res);
});

router.patch("/", function (req, res, next) {
  book.edit(req, res);
});

router.delete("/", function (req, res, next) {
  book.delete(req, res);
});

module.exports = router;
