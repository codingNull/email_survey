const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const authRoutes = require("./routes/authRoutes");
const { MongodbURI, sessionKey } = require("./config/keys");
require("./services/passport");
const bodyParser = require("body-parser");
const payRoute = require("./routes/payRoute");
const surveyRoute = require("./routes/surveyRoutes");

const app = express();
mongoose.connect(MongodbURI);
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [sessionKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
authRoutes(app);
payRoute(app);
surveyRoute(app);

if (process.env.NODE_ENV === "production") {
  //serve up main.js or main.css files
  app.use(express.static("client/build"));
  const path = require("path");
  //serve up index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log(`server listen at port ${PORT}`);
