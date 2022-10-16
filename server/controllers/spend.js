const Spend = require("../models/SpendModel");

//--------------------------------------------Create------------------------------------
exports.createSpend = async (req, res) => {
  try {
    let note = new Spend({
      cost: req.body.cost,
      category: req.body.category,
      store: req.body.store,
      card: req.body.card,
    });
    await note.save();
    res.send(note);
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Read  ------------------------------------
exports.readAllSpends = async (req, res) => {
  try {
    Spend.find({}, (err, result) => {
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
exports.readSpendFromID = async (req, res) => {
  try {
    await Spend.findById({ _id: req.params.id }, {}, (err, result) => {
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

// exports.updatePost = async (req, res) => {
//   try {
//     await Spend.findByIdAndUpdate(
//       req.params.id,
//       {
//         responded: req.body.responded,
//         notes: req.body.notes,
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
exports.deleteSpend = async (req, res) => {
  try {
    if ((await Spend.findById(req.params.id)) === null) {
      res.send("Post Not Found");
    } else {
      await Spend.findByIdAndRemove(req.params.id).exec();
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
