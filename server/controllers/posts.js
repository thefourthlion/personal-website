const Posts = require("../models/projectModel");

//--------------------------------------------Create------------------------------------
exports.createPost = async (req, res) => {
  try {
    let note = new Posts({
      title: req.body.title,
      projectDescription: req.body.projectDescription,
      imageLink: req.body.imageLink,
      webLink: req.body.webLink,
      githubLink: req.body.githubLink,
    });

    await note.save();
    res.send(note);
  } catch (err) {
    console.log(err);
  }
};

//--------------------------------------------Read  ------------------------------------
exports.readPosts = async (req, res) => {
  try {
    Posts.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      // console.log(result);
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

//-------------------------------------------- Read by id  ------------------------------------
exports.readPostFromID = async (req, res) => {
  try {
    await Posts.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      // console.log(result);
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};

//-------------------------------------------- Update  ------------------------------------

exports.updatePost = async (req, res) => {
  try {
    await Posts.findByIdAndUpdate(
      req.params.id,
      {
        responded: req.body.responded,
        notes: req.body.notes,
        quote: req.body.quote,
      },
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

//--------------------------------------------Delete------------------------------------
exports.deletePost = async (req, res) => {
  try {
    if ((await Posts.findById(req.params.id)) === null) {
      res.send("Post Not Found");
    } else {
      await Posts.findByIdAndRemove(req.params.id).exec();
      res.send("Deleted Post");
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
