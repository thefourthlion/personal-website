const Contact = require("../models/Contact");
const { sendEmail } = require("./email");
exports.createContact = async (req, res) => {
  try {
    const htmlEmail = ` 
    <div>
          <h2>Hey Everett,</h2>
          <h4>
            Someone is trying to contact you through your personal website.
          </h4>
          <h2>Latest Contact</h2>
          <h4>Name | ${req.body.name}</h4>
          <h4>
            Email |
            <a href="mailto:${req.body.email}?subject=Thank You For Leaving Feedback With Twain Harte Lumber">
              ${req.body.email}
            </a>
          </h4>
          <h4>MESSAGE | ${req.body.message}</h4>
          <h4>DATE SENT | ${req.body.timestamp}.</h4>
        </div>    
    `;

    let newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      timestamp: req.body.timestamp,
    });
    await sendEmail(
      process.env.FROM_EMAIL,
      process.env.TO_EMAIL,
      "PERSONAL SITE 🧑‍💻✅😁 | NEW CONTACT",
      htmlEmail
    );
    await newContact.save();

    res.send(newContact);
  } catch (err) {
    console.log(err);
  }
};
exports.readContact = async (req, res) => {
  try {
    Contact.find({}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    }).sort({ createdAt: -1 });
  } catch (err) {
    console.log(err);
  }
};
exports.readContactFromID = async (req, res) => {
  try {
    await Contact.findById({ _id: req.params.id }, {}, (err, result) => {
      if (err) {
        res.json({ app: err });
      }
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateContact = async (req, res) => {
  try {
    await Contact.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        timestamp: req.body.timestamp,
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
exports.deleteContact = async (req, res) => {
  try {
    if ((await Contact.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await Contact.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
