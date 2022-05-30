var express = require("express");
var router = express.Router();
let author = require("../controllers/authors");

/* GET users listing. */
router.get("/", function (req, res, next) {
  author.getAll(req, res);
});

router.get("/:id", function (req, res, next) {
  author.getOne(req, res);
});

router.post("/", function (req, res, next) {
  author.create(req, res);
});

router.patch("/", function (req, res, next) {
  author.edit(req, res);
});

router.delete("/", function (req, res, next) {
  author.delete(req, res);
});

module.exports = router;
