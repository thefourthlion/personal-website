const Earning = require("../models/earning");

//--------------------------------------------Create------------------------------------
exports.addEarning = async (req, res) => {
  try {
    let earning = new Earning({
      amount: req.body.amount,
      activity: req.body.activity,
      enjoyment: req.body.enjoyment,
      deposit: req.body.deposit,
      timestamp: req.body.timestamp,
    });
    await earning.save();
    res.send(earning);
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Read  ------------------------------------
exports.allMoneyEarned = async (req, res) => {
  try {
    Earning.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

//-------------------------------------------- Read by id  ------------------------------------
exports.readEarningByID = async (req, res) => {
  try {
    await Earning.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

//-------------------------------------------- Update  ------------------------------------

// exports.updateEarning = async (req, res) => {
//   try {
//     await Earning.findByIdAndUpdate(
//       req.params.id,
//       {
//         responded: req.body.responded,
//         earnings: req.body.earnings,
//         quote: req.body.quote,
//       },
//       (err, result) => {
//         if (err) {
//           res.json({ app: err });
//         }
//         res.send(result);
//       }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// };

//--------------------------------------------Delete------------------------------------
exports.deleteEarning = async (req, res) => {
  try {
    if ((await Earning.findById(req.params.id)) === null) {
      res.send("Post Not Found");
    } else {
      await Earning.findByIdAndRemove(req.params.id).exec();
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
