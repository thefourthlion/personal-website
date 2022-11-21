const express = require("express");

const router = express.Router();

const {
  createSpend,
  readAllSpends,
  readSpendFromID,
  deleteSpend,
} = require("../controllers/spend");

router.route("/create").post(createSpend);
router.route("/read").get(readAllSpends);
router.route("/read/:id").get(readSpendFromID);
router.route("/delete/:id").delete(deleteSpend);

module.exports = router;
