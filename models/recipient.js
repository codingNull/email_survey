const mongoose = require("mongoose");
const Schema = mongoose.Schema;

exports.RecipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false },
});
