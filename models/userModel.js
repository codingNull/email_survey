const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");

const userSchema = new Schema({
  googleID: String,
  credits: { type: Number, default: 0, required: true },
});

exports.UserClass = mongoose.model("users", userSchema);
