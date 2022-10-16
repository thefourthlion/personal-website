const express = require("express");

const router = express.Router();

const {
  createSpend,
  readAllSpends,
  readSpendFromID,
  deleteSpend,
} = require("../controllers/spend");

router.route("/spend").post(createSpend);
router.route("/seeAllSpends").get(readAllSpends);
router.route("/seeOneSpend/:id").get(readSpendFromID);
router.route("/deleteSpend/:id").delete(deleteSpend);

module.exports = router;
