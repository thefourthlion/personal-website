const express = require("express");

const router = express.Router();

const {
  addEarning,
  allMoneyEarned,
  readEarningByID,
  deleteEarning,
} = require("../controllers/earn");

router.route("/earn").post(addEarning);
router.route("/allMoneyEarned").get(allMoneyEarned);
router.route("/earning/:id").get(readEarningByID);
router.route("/deleteEarning/:id").delete(deleteEarning);

module.exports = router;
