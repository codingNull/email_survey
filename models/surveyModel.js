const mongoose = require("mongoose");
const { Schema } = mongoose;
const Recipient = require("./recipient").RecipientSchema;

const SurverySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [Recipient],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "users" },
  dateSent: Date,
  dateResponded: Date,
});

module.exports = mongoose.model("surveys", SurverySchema);
