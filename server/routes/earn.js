const express = require("express");

const router = express.Router();

const {
  addEarning,
  allMoneyEarned,
  readEarningByID,
  deleteEarning,
} = require("../controllers/earn");

router.route("/create").post(addEarning);
router.route("/read").get(allMoneyEarned);
router.route("/read/:id").get(readEarningByID);
router.route("/delete/:id").delete(deleteEarning);

module.exports = router;
