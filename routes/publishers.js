var express = require("express");
var router = express.Router();
let publisher = require("../controllers/publishers");

/* GET users listing. */
router.get("/", function (req, res, next) {
  publisher.getAll(req, res);
});

router.get("/:id", function (req, res, next) {
  publisher.getOne(req, res);
});

router.post("/", function (req, res, next) {
  publisher.create(req, res);
});

router.patch("/", function (req, res, next) {
  publisher.edit(req, res);
});

router.delete("/", function (req, res, next) {
  publisher.delete(req, res);
});

module.exports = router;
