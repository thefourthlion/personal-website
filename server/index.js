const express = require("express");
const session = require("express-session");
const passport = require("passport");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const User = require("./models/auth");
const connectDB = require("./config/mongoose");

// --------------------------------------------(end of imports)------------------------------------------

require("dotenv").config({ path: "./.env" });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// connect to note db
connectDB();

// --------------------------------------------(end of init)------------------------------------------
const LocalStrategy = require("passport-local").Strategy;
passport.use(new LocalStrategy(User.authenticate()));

// ----------------------------------------(sessions and cookies🍪)----------------------------------
app.use(
  session({
    secret: process.env.ENCRYPT_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());

app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get("/", (req, res) => {
  res.json({ app: "running" });
});

// --------------------------------------------(end of note routes)------------------------------------------
app.listen(PORT, () => {
  console.log("✅ Listening on port " + PORT);
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/Contact", require("./routes/Contact"));
app.use('/api/library', require('./routes/library'));app.use('/api/journal', require('./routes/journal'));