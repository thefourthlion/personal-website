const bucketlist = require("../models/bucketlist");
exports.createbucketlist = async (req, res) => {
  try {
    let newbucketlist = new bucketlist({
      item: req.body.item,
      done: req.body.done,
    });
    await newbucketlist.save();
    res.send(newbucketlist);
  } catch (err) {
    console.log(err);
  }
};
exports.readbucketlist = async (req, res) => {
  try {
    bucketlist
      .find({}, (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      })
      .sort({ createdAt: -1 });
  } catch (err) {
    console.log(err);
  }
};
exports.readbucketlistFromID = async (req, res) => {
  try {
    await bucketlist.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updatebucketlist = async (req, res) => {
  try {
    await bucketlist.findByIdAndUpdate(
      req.params.id,
      { item: req.body.item, done: req.body.done },
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
exports.deletebucketlist = async (req, res) => {
  try {
    if ((await bucketlist.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await bucketlist.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
